export function input({label, id, name, type, placeholder = "", required = false, value = false}) {
  return `
  <div class="input">
    ${ label ?
      `<label for="${id}" class="content-xs overline" >${label}</label>`
      : ""
    }
    <div class="input__container">
      <input
        type="${type ? type : "text" }"
        placeholder="${placeholder}"
        class="input__content"
        id="${id}"
        name="${name ? name: id}"
        ${value ? `value="${value}"` : ""}
        ${required ? "required" : ""}
      >
    </div>
  </div>
  `
}

export function select({label, id, name, value = ""}) {
  return `
  ${ label ?
    `<label for="${id}"  >${label}</label>`
    : ""
  }
  <div class="select-container">
    <select class="input-select" name="${name ? name: id}" id="${id}">
      <option ${"Alphabetical"==value ? "selected=true" : ""} value="Alphabetical">Alphabetical (a-z)</option>
      <option ${"Date"==value ? "selected=true" : ""} value="Date">Due date</option>
      <option ${"Importance"==value ? "selected=true" : ""} value="Importance">Importance</option>
    </select>
  </div>`
}