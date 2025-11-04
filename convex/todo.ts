import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getTodos = query({
  args: {},
  handler: async ({ db }) => {
    return await db.query("todos").collect();
  },
});

export const addTodo = mutation({
  args: { text: v.string(), completed: v.boolean() },
  handler: async ({ db }, { text, completed }) => {
    await db.insert("todos", { text, completed });
  },
});

export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    const todo = await db.get(id);
    if (!todo) return;
    await db.patch(id, { completed: !todo.completed });
  },
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
  },
});
