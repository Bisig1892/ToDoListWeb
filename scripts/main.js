window.onload = function () {
    var addBtn = document.querySelector('form > input[type=submit]');
    addBtn.onclick = main;
};
/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
function main() {
    var item = getItem();
    // Display new ToDoItem from page
    displayToDoItem(item);
    // Save ToDoItem
}
/**
 * Gets the user input todo item from the form.
 */
function getItem() {
    var title = document.getElementById('title').value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById('deadline').value;
    item.deadline = new Date(deadline);
}
/**
 * Displays ToDoItem on the page
 * @param item
 */
function displayToDoItem(item) {
    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox">' + item.title;
    var displayDiv = document.getElementById('todo');
    displayDiv.appendChild(div);
}
