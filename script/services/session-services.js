const base_url = "https://doable-api.herokuapp.com/;"

async function login(credentials = { email, password }) {
  const response = await fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })

  const data = await response.json()

  sessionStorage.setItem("doable_token", data.token)
}

login()