import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import { login } from "../services/session-services.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";
import SignupPage from "./signup-page.js";

function render() {
  const { loginError } = LoginPage.state;

  return `
    <main>
      <section class="container">
        <div class="header">
          <img class="img" src="../assets/{doable}.svg" />
        </div>
        
        <form class="form-sessions flex flex-column gap-4 mb-4 js-login-form">

          ${input({
            id: "email",
            type: "email",
            placeholder: "nosoydiego@gmail.com",
            required: true,
            value: "test1@mail.com"
          })}

          ${input({
            id: "password",
            type: "password",
            placeholder: "******",
            required: true,
            value: "123456"
          })}

          ${loginError ? 
            `<p class="text-center error-300">${loginError}</p>`: ''
          }

          <button class="button button--primary">Login</button>
        </form>
        <a href="#" class="block text-center js-signup-link">Create account</a>
      </section>
    </main>
  `;
}

function listenSubmitForm() {
  const form = document.querySelector(".js-login-form")
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      const { email, password } = event.target;

      const credentials  = {
        email: email.value,
        password: password.value,
      }

      const user = await login(credentials)
      STORE.user = user
      await STORE.fetchTasks()
      DOMHandler.load(HomePage)
    } catch (error) {
      LoginPage.state.loginError = error.message
      DOMHandler.reload()
    }
    
  })
}

function GoToSignup() {
  const signup =  document.querySelector(".js-signup-link")
  signup.addEventListener("click", (event) => {
    event.preventDefault()
    // STORE.currenTab = "signup"
    DOMHandler.load(SignupPage)
  })
}

const LoginPage = {
  toString() {
    return render()
  },
  addListeners() {
    listenSubmitForm(),
    GoToSignup()
  },
  state: {
    loginError: null,
  }
}

export default LoginPage;