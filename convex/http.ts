import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();


http.route({
  path: "/test",
  method: "GET",
  handler: httpAction(async () => {
    return new Response("Hello from Convex!", {
      headers: { "Content-Type": "text/plain" },
    });
  }),
});

// ✅ Get all todos
http.route({
  path: "/todos/get",  // Added /todos prefix
  method: "GET",
  handler: httpAction(async (ctx) => {
    const todos = await ctx.runQuery(api.todo.getTodos, {});
    return new Response(JSON.stringify(todos), {
      headers: { "Content-Type": "application/json" },
    });
  }),
});

// ✅ Add a todo
http.route({
  path: "/todos/add",  // Added /todos prefix
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { text, completed } = await request.json();
    await ctx.runMutation(api.todo.addTodo, { text, completed });
    return new Response(JSON.stringify({ success: true }), { 
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  }),
});

// ✅ Toggle a todo
http.route({
  path: "/todos/toggle",  // Added /todos prefix
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { id } = await request.json();
    await ctx.runMutation(api.todo.toggleTodo, { id });
    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }),
});

// ✅ Delete a todo
http.route({
  path: "/todos/delete",  // Added /todos prefix
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { id } = await request.json();
    await ctx.runMutation(api.todo.deleteTodo, { id });
    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }),
});

export default http;