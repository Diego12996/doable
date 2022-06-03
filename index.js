import { login, logout } from "./script/services/session-services.js";

const credentials = {
	"email": "dexhuj@mail.com",
	"password": "123456"
}

async function test() {
  try {
    const user = await login(credentials)
    const data = await logout()
    console.log(user)
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }

}

test()