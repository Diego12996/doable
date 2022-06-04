import STORE from "../store.js";

function render() {
  const tasks = STORE.tasks
  console.log(tasks)
  return `
    <h2>Tasks</h2>
    <ul class="ul js-task-list">
      ${tasks.map(task => (
        `<li class="li">
          <input type="checkbox" data-pendingID="${task.id}" value="pending">
          <p>${task.title}</p>
          <input type="checkbox" data-importantID="${task.id}" value="important">
        </li>`
      )).join("")}
  `
}

function listenPending() {
  const ul = document.querySelector(".js-tasks-list")

  ul.addEventListener("checked", event => {
    event.preventDefault()

    const pendingButton = event.target.closest("[data-pendingID]")
    if(!pendingButton) return;

    console.log(pendingButton.dataset.pendingID)
  })
}

const Tasks = {
  toString() {
    return render();
  },
  addListeners(){
    listenPending()
  }
}

export default Tasks;