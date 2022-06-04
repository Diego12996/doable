import { input, select } from "../components/input.js"
import Tasks from "../components/tasks.js"
import DOMHandler from "../dom-handler.js"
import { logout } from "../services/session-services.js"
import STORE from "../store.js"
import LoginPage from "./login-page.js"

function render() {
  return `
  <main>
    <section class="container">
      <div class="header">
        <img class="img" src="../assets/{doable}.svg" />
        <a class="js-logout" href="#" data-action="logout">Logout</a>
      </div>
    </section>
    <form>

      ${select({
        id: "sort",
        label: "Sort"
      })}

    </form>

    <form>
      <input type="radio" id="pending" name="same" value="Only pending">
      <label for="pending">Only pending</label><br>
      <input type="radio" id="important" name="same" value="Only pending">
      <label for="important">Only important</label><br>
    </form>

    ${Tasks}

    <form class="form-home-page flex flex-column gap-4 mb-4">
      ${input({
        id: "task",
        placeholder: "do the dishes...",
        required: true,
      })}

      ${input({
        id: "date",
        type: "date",
        placeholder: "mm/dd/yy",
        required: false,
      })}

      <button class="button button--primary">Add Task</button>
    </form>

  </main>
  `
}

function listenLogout() {
  const logoutLink = document.querySelector('[data-action="logout"]')
  logoutLink.addEventListener("click", async (event) => {
    event.preventDefault()
    // DOMHandler.reload();

    try {
      await logout()
      DOMHandler.load(LoginPage)
    } catch(error) {
      console.log(error.message)
      DOMHandler.reload()
    }
  })
}

const HomePage = {
  toString() {
    return render()
  },
  addListeners() {
    listenLogout();
    Tasks.addListeners();
  }
}

export default HomePage;