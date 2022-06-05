import DOMHandler from "../dom-handler.js";
import HomePage from "../pages/home-page.js";
import { createTask, editTask, getTasks } from "../services/tasks-service.js";
import STORE from "../store.js";

function render() {
  const tasks = STORE.tasks
  console.log(tasks)
  return `
    <h2>Tasks</h2>
    <ul class="ul js-task-list">
      ${tasks.map(task => (
        `<li class="li">
          <input type="checkbox" data-pending="${task.id}" value="pending">
          <p>${task.title}</p>
          <p>${task.due_date}</p>
          <input type="checkbox" data-important="${task.id}" value="important">
        </li>`
      )).join("")} 
  `
}

function listenPending() {
  const ul = document.querySelector(".js-task-list")

  ul.addEventListener("click", async (event) => {
    event.preventDefault()

    const pendingButton = event.target.closest("[data-pending]")
    if(!pendingButton) return

    const id = pendingButton.dataset.pending

    const task = STORE.getTask(id)

    const data = {
      completed: !task.completed
    }

    await editTask(id, data)
    // const id = STORE.tasktDetail.id
    await STORE.fetchTasks()
    // STORE.updateTask(id)
    DOMHandler.reload()
  })
}

function listenImportant() {
  const ul = document.querySelector(".js-task-list")

  ul.addEventListener("click", async (event) => {
    event.preventDefault()

    const importantButton = event.target.closest("[data-important]")
    if(!importantButton) return

    const id = importantButton.dataset.important

    const task = STORE.getTask(id)

    const data = {
      important: !task.important
    }

    await editTask(id, data)
    await STORE.fetchTasks()
    DOMHandler.reload()
  })
}

const Tasks = {
  toString() {
    return render();
  },
  addListeners(){
    listenPending(),
    listenImportant()
  }
}

export default Tasks;