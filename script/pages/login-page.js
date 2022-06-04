import { input } from "../components/input.js";

function render() {
  return `
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center mb-4">Login</h1>
        <form class="flex flex-column gap-4 mb-4 js-login-form">

          ${input({
            label: "email",
            id: "email",
            type: "email",
            placeholder: "nosoydiego@gmail.com",
            required: true,
            value: "test1@mail.com"
          })}

          ${input({
            label: "password",
            id: "password",
            type: "password",
            placeholder: "******",
            required: true,
            value: "123456"
          })}

          

          <button class="button button--primary">Login</button>
        </form>
        <a href="#" class="block text-center js-signup-link">Create account</a>
      </section>
    </main>
  `;
}

const LoginPage = {
  toString() {
    return render()
  },
  addListeners() {}
}

export default LoginPage;