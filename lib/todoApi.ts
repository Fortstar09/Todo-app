const BASE_URL = process.env.EXPO_PUBLIC_CONVEX_URL + "/api/todos";

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/get`);
  if (!res.ok) throw new Error('Failed to fetch todos');
  return await res.json();
}

export async function addTodo(text: string, completed: boolean) {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, completed }),
  });
  if (!res.ok) throw new Error('Failed to add todo');
  // Don't parse JSON, just return success
}

export async function toggleTodo(id: string) {
  const res = await fetch(`${BASE_URL}/toggle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('Failed to toggle todo');
}

export async function deleteTodo(id: string) {
  const res = await fetch(`${BASE_URL}/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('Failed to delete todo');
}