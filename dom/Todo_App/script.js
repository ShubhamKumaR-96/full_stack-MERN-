function loadTodos() {
    // This function will load the todos from the local storage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}

function renderTodos(todos) {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

function addTodoToLocalStorage(todo) {
    // This function will add the todo to the local storage
    const todos = loadTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");

    // Load and render todos on page load
    renderTodos(loadTodos());

    submitButton.addEventListener("click", (e) => {
        const todoText = todoInput.value.trim(); // Trim whitespace
        if (todoText === "") {
            alert("Please write something for your todo");
        } else {
            addTodoToLocalStorage(todoText);
            renderTodos(loadTodos());
            todoInput.value = ""; // Clear input after adding
        }
    });

    todoInput.addEventListener("change", (e) => {
        const todoText = e.target.value.trim(); // Trim whitespace
        e.target.value = todoText;
    });
});
