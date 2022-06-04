import { getTasks } from "./services/tasks-service.js";

async function fetchTasks() {
  const tasks = await getTasks()
  this.complete = tasks.filter( task => task.completed === true);
  this.urgent = tasks.filter( task => task.important == true);
  this.tasks = tasks;
}

function currentTasks(){
  return this[this.tasks]
}

const STORE = {
  user: null,
  urgent: [],
  complete: [],
  tasks: [],
  fetchTasks,
  currentTasks
}

export default STORE;