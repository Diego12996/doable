import { tokenKey } from "./script/config.js";
import DOMHandler from "./script/dom-handler.js";
import HomePage from "./script/pages/home-page.js";
import LoginPage from "./script/pages/login-page.js";
import { login } from "./script/services/session-services.js";
import STORE from "./script/store.js";

async function init () {
  try {
    const token = sessionStorage.getItem(tokenKey)

    if(!token) throw new Error()

    STORE.user = token 

    await STORE.fetchTasks();
    DOMHandler.load(HomePage)
  } catch(error) {
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage)
  }
}

// sessionStorage.setItem(tokenKey, "tUrMC9a")

init();