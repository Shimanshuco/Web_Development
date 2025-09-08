let inputval = document.querySelector("#todo-input");
let prioritySelect = document.querySelector("#priority");
let todosContainer = document.querySelector(".todoadd");
let currentlyEditing = null;
let i = 0;

function addTodo() {
  if (inputval.value.trim() === "") {
    alert("Please enter something!");
    return;
  }

  if (currentlyEditing !== null) {
    // Update existing todo
    let h3 = currentlyEditing.querySelector("h3");
    let span = currentlyEditing.querySelector("span");
    h3.textContent = inputval.value;
    span.textContent = `Priority: ${prioritySelect.value}`;
    inputval.value = "";
    currentlyEditing = null;
    return;
  }

  let val = inputval.value;
  let divel = document.createElement("div");
  divel.classList.add("todo-item", `priority-${prioritySelect.value.toLowerCase()}`);
  divel.innerHTML = `
    <h3>${val}</h3> 
    <span>Priority: ${prioritySelect.value}</span>
    <div class="actions">
      <button onclick="editodo(${i})" class="todo-${i}">✏️ Edit</button>
      <button onclick="deletet(${i})" class="todo-${i}">🗑️ Delete</button>
    </div>
  `;
  todosContainer.appendChild(divel);

  inputval.value = "";
  i++;
}

function deletet(idx) {
  let todo = document.querySelector(`.todo-${idx}`);
  if (todo) {
    todo.parentElement.parentElement.remove();
  }
}

function editodo(idx) {
  let todo = document.querySelector(`.todo-${idx}`);
  if (todo) {
    let div = todo.closest(".todo-item");
    let h3 = div.querySelector("h3");
    let span = div.querySelector("span");
    inputval.value = h3.textContent;
    prioritySelect.value = span.textContent.replace("Priority: ", "");
    currentlyEditing = div;
  }
}
