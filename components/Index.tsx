import { icons } from 'constants/icons';
import { images } from 'constants/images';
import { api } from 'convex/_generated/api';
import { Id } from 'convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface TodoProp {
  id:  Id<'todos'>;
  text: string;
  completed: boolean;
}

type FilterType = 'All' | 'Active' | 'Completed';

export default function Index() {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState<FilterType>('All');
  const [darkMode, setDarkMode] = useState(false); // 🟢 NEW: dark mode state

  // 🔹 Fetch todos from backend
  const allTodos = useQuery(api.todo.getTodos) || [];

  // 🔹 Define mutations
  const addTodo = useMutation(api.todo.addTodo);
  const toggleTodoMutation = useMutation(api.todo.toggleTodo);
  const deleteTodoMutation = useMutation(api.todo.deleteTodo);

  // 🟢 Add a new todo
  // 🟢 Add a new todo
  const handleAddTodo = async () => {
    if (!text.trim()) return;
    try {
      await addTodo({ text, completed });
      setText('');
      setCompleted(false);
    } catch (error) {
      console.log(String(error));
      Alert.alert('Error', 'Failed to add todo. Check internet connection.');
    }
  };

  // 🟢 Toggle completion
  const toggleTodo = async (id: Id<'todos'>) => {
    try {
      await toggleTodoMutation({ id });
    } catch (error) {
      console.log(String(error));

      Alert.alert('Error', 'Failed to toggle todo.');
    }
  };

  // 🟢 Delete todo
  const deleteTodo = async (id: Id<'todos'>) => {
    console.log(id);
    try {
      await deleteTodoMutation({ id });
    } catch (error) {
      console.log(String(error));

      Alert.alert('Error', 'Failed to delete todo.');
    }
  };

  const clearCompleted = async () => {
    try {
      // Collect completed IDs from current todos (server or local)
      const completedIds = allTodos.filter((t) => t.completed).map((t) => t._id) as (
        | string
        | Id<'todos'>
      )[];

      // Run deletions in parallel
      await Promise.all(completedIds.map((id) => deleteTodoMutation({ id: id as Id<'todos'> })));
    } catch (err) {
      console.log(String(err));
      Alert.alert('Error', 'Failed to clear completed todos.');
    }
  };

  // 🟢 Filtered list
  const filteredTodos = allTodos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const itemsLeft = allTodos.filter((todo) => !todo.completed).length;

  // 🟢 Colors depend on theme
  const bgColor = darkMode ? '#171823' : '#FAFAFA';
  const textColor = darkMode ? '#C8CBE7' : '#494C6B';
  const boxColor = darkMode ? '#25273D' : '#FFFFFF';

  return (
    <View className="relative flex-1" style={{ backgroundColor: bgColor }}>
      <ImageBackground
        source={images.homeBg}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 260,
        }}
        resizeMode="cover"
      />

      <ScrollView
        className="px-[26px]"
        contentContainerStyle={{ paddingTop: 100, paddingBottom: 50 }}
        keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View className="mb-10 w-full flex-row items-center justify-between">
          <Image source={icons.todo} resizeMode="contain" className="max-h-5 max-w-[108px]" />
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Image
              resizeMode="contain"
              source={darkMode ? icons.light : icons.dark}
              className="h-5 w-5"
            />
          </TouchableOpacity>
        </View>

        {/* Input box */}
        <View
          className="mb-4 flex-row items-center rounded-[5px] px-5 py-3.5"
          style={{ backgroundColor: boxColor }}>
          <TouchableOpacity onPress={() => setCompleted(!completed)}>
            <Image
              source={completed ? icons.checked : darkMode ? icons.uncheckedBlack : icons.unchecked}
              resizeMode="contain"
              className="size-5"
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Create a new todo…"
            value={text}
            onChangeText={setText}
            placeholderTextColor={darkMode ? '#767992' : '#9495A5'}
            className="ml-3 flex-1"
            style={{ color: textColor }}
            onSubmitEditing={handleAddTodo}
            returnKeyType="done"
          />
        </View>

        {/* Todo List */}
        <View
          className="mb-4 min-h-[300px] w-full rounded-[5px]"
          style={{
            backgroundColor: boxColor,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.02,
            shadowRadius: 10,
            elevation: 100,
          }}>
          {filteredTodos.map((item) => (
            <EachTodo
              key={item._id}
              id={item._id}
              completed={item.completed}
              text={item.text}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              darkMode={darkMode}
            />
          ))}

          <View className="flex w-full flex-row items-center justify-between px-5 pb-5 pt-4">
            <Text
              className="text-xs tracking-[-0.17px]"
              style={{ color: darkMode ? '#5B5E7E' : '#5B5E7E' }}>
              {itemsLeft} items left
            </Text>
            <TouchableOpacity onPress={clearCompleted}>
              <Text
                className="text-xs tracking-[-0.17px]"
                style={{ color: darkMode ? '#5B5E7E' : '#5B5E7E' }}>
                Clear Completed
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Filters */}
        <View
          className="mb-10 flex min-h-12 flex-row items-center justify-center gap-[18px] rounded-[5px] py-[15px]"
          style={{ backgroundColor: boxColor }}>
          {['All', 'Active', 'Completed'].map((type) => (
            <TouchableOpacity key={type} onPress={() => setFilter(type as FilterType)}>
              <Text
                className="text-sm font-bold tracking-[-0.19px]"
                style={{
                  color: filter === type ? '#3A7CFD' : darkMode ? '#5B5E7E' : '#5B5E7E',
                }}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text
          className="text-center text-sm font-normal tracking-[-0.19px]"
          style={{ color: darkMode ? '#777A92' : '#9495A5' }}>
          Drag and drop to reorder list
        </Text>
      </ScrollView>
    </View>
  );
}

const EachTodo = ({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
  darkMode,
}: TodoProp & {
  toggleTodo: (id: Id<'todos'>) => void;
  deleteTodo: (id:Id<'todos'>) => void;
  darkMode: boolean;
}) => {
  return (
    <View
      className="flex min-h-[60px] w-full flex-row items-center justify-between gap-3 border-b px-5 py-4"
      style={{ borderColor: darkMode ? '#393A4B' : '#E3E4F1' }}>
      <View className="flex flex-row items-center justify-center gap-3">
        <TouchableOpacity onPress={() => toggleTodo(id)}>
          <Image
            source={completed ? icons.checked : darkMode ? icons.uncheckedBlack : icons.unchecked}
            className="size-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          className="text-base"
          style={{
            color: completed ? '#4D5067' : darkMode ? '#C8CBE7' : '#494C6B',
            textDecorationLine: completed ? 'line-through' : 'none',
            opacity: completed ? 0.3 :1,
          }}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <Image source={icons.cancel} className="size-4" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};
