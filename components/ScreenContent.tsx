import { icons } from 'constants/icons';
import { images } from 'constants/images';
import { addTodo, deleteTodo, getTodos, toggleTodo } from 'lib/todoApi';
import { useEffect, useState } from 'react';
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
  id: string;
  text: string;
  completed: boolean;
}

type FilterType = "All" | "Active" | "Completed";

export default function Index() {
  const [todos, setTodos] = useState<TodoProp[]>([]);
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState<FilterType>("All");
  const [darkMode, setDarkMode] = useState(false);

  // 🟢 Fetch all todos
  const fetchTodos = async () => {
    try {
      const data = await getTodos();
    
      setTodos(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", String(error));
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 🟢 Add a new todo
  const handleAddTodo = async () => {
    if (!text.trim()) return;
    try {
      await addTodo(text, completed);
      setText("");
      setCompleted(false);
      await fetchTodos();
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "Failed to add todo.");
    }
  };

  // 🟢 Toggle completion
  const handleToggleTodo = async (id: string) => {
    try {
      await toggleTodo(id);
      await fetchTodos();
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "Failed to toggle todo.");
    }
  };

  // 🟢 Delete a todo
  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (error) {

      console.log(error);
      Alert.alert("Error", "Failed to delete todo.");
    }
  };

  // 🟢 Clear completed todos
  const clearCompleted = async () => {
    try {
      const completedIds = todos.filter((t) => t.completed).map((t) => t.id);
      await Promise.all(completedIds.map((id) => deleteTodo(id)));
      await fetchTodos();
    } catch (error) {
      Alert.alert("Error", "Failed to clear completed todos.");
    }
  };

  // 🟢 Filtered list
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  // 🟢 Theme colors
  const bgColor = darkMode ? "#171823" : "#FAFAFA";
  const textColor = darkMode ? "#C8CBE7" : "#494C6B";
  const boxColor = darkMode ? "#25273D" : "#FFFFFF";

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
              key={item.id}
              id={item.id}
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
          className="mb-10 flex flex-row items-center justify-center gap-[18px] rounded-[5px] py-[15px]"
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
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
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
