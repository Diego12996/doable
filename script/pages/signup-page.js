import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import { login } from "../services/session-services.js";
import { createUser } from "../services/user-service.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";
import LoginPage from "./login-page.js";

function render() {
  const { SignupError } = SignupPage.state;
  return `
    <main>
      <section class="container">
        <div class="header">
          <img class="img" src="../assets/{doable}.svg" />
        </div>
        <form class="form-sessions flex flex-column gap-4 mb-4 js-signup-form">

          ${input({
            id: "email",
            type: "email",
            placeholder: "email",
            required: true,
            value: ""
          })}

          ${input({
            id: "password",
            type: "password",
            placeholder: "password",
            required: true,
            value: ""
          })}

          ${SignupError ? 
            `<p>${SignupError}</p>`: ''
          }

            <button class="button button--primary">Create account</button>
        </form>
        <a href="#" class="block text-center js-login-link">Login</a>
      </section>
    </main>
  `;
}

function listenSubmitForm() {
  const form =  document.querySelector(".js-signup-form")

  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
  
      const { email, password } = event.target;
  
      const credentials = {
        email: email.value,
        password: password.value,
      }
  
      await createUser(credentials)
      // STORE.user = sessionStorage.getItem(userEmail)
      // console.log(user)
      // STORE.user = user

      await STORE.fetchTasks()
      DOMHandler.load(HomePage)
    } catch (error) {
      // this.state.loginError = error.message
      // let errorDetail = JSON.parse(error.message)
      SignupPage.state.SignupError = error.message
      DOMHandler.reload()
    }
  })
}

function GoToLogin() {
  const signin =  document.querySelector(".js-login-link")
  signin.addEventListener("click", (event) => {
    event.preventDefault()
    DOMHandler.load(LoginPage)
  })
}

const SignupPage = {
  toString() {
    // return render.call(this)
    return render()
  },
  addListeners() {
    // listenSubmitForm.call(this)
    listenSubmitForm()
    GoToLogin()
  },
  state: {
    SignupError: null,
  }
}

export default SignupPage;