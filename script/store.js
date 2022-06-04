import { getTasks } from "./services/tasks-service.js";

async function fetchTasks() {
  const tasks = await getTasks()
  this.complete = tasks.filter( task => task.completed === true);
  this.urgent = tasks.filter( task => task.important == true);
  this.tasks = tasks;
}
const STORE = {
  user: null,
  complete: [],
  tasks: [],
  fetchTasks,
}

export default STORE;