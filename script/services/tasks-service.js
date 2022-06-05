import STORE from "../store.js";
import apiFetch from "./api-fetch.js";

export function getTasks(){
  return apiFetch(`tasks`)
}

export function createTask(newTask = { title, due_date }) {
  return apiFetch("tasks", {body: newTask} )
}

export function deleteTask(id) {
  return apiFetch(`categories/${id}`, { method: "DELETE" });
}

export function importantTasks(id) {
  const [task] = STORE.urgent
}

export function editTask(id, updateTask = { completed, important }) {
  return apiFetch(`tasks/${id}`, { method: "PATCH", body: updateTask });
}