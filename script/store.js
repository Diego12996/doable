import { getTasks } from "./services/tasks-service.js";

async function fetchTasks() {
  const tasks = await getTasks()
  this.complete = tasks.filter( task => task.completed === true);
  this.urgent = tasks.filter( task => task.important == true);
  this.tasks = tasks;
}

function getTask(id) {
  const [task] = this.tasks.filter(task => task.id == id)
  return task
}

function updateTask(id) {
  const [task] = this.tasks.filter(task => task.id == id)
  let valor = task.completed;
  task.completed = !valor
}

function currentTasks(){
  return this[this.tasks]
}

const STORE = {
  user: null,
  tasktDetail: null,
  urgent: [],
  complete: [],
  tasks: [],
  getTask,
  fetchTasks,
  currentTasks,
  updateTask
}

export default STORE;