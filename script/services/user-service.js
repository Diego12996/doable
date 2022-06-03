import { tokenKey } from "../config.js"
import apiFetch from "./api-fetch.js"

export async function createUser(newUser = { email, password }) {
  const {token} = apiFetch("signup", { body: newUser})
  sessionStorage.setItem(tokenKey, token);
  return token;
}

export async  function deleteUser() {
  const data = await apiFetch("profile", { method: "DELETE" })
  sessionStorage.removeItem(tokenKey)
  return data
}

  