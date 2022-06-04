import DOMHandler from "../dom-handler.js"
import { logout } from "../services/session-services.js"
import STORE from "../store.js"
import LoginPage from "./login-page.js"

function render() {
  return `
  <main class="section">
    <section class="container">
      <h1 class="heading heading--lg text-center mb-2">Expensable</h1>
      <a class="text-center block mb-8 js-logout" href="#" data-action="logout">Logout</a>
    </section>
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
  }
}

export default HomePage;