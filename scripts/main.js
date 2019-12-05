/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish class");
window.onload = function () {
    var addBtn = document.getElementById('submit');
    addBtn.onclick = main;
    showAllToDoItems();
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    var allItems = getToDoItems();
    allItems.push(item); //Adds new items to allItems list
    saveToDoItems(allItems);
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].title;
    }
}
/**
 * Move selected task to completed section
 * of the web page
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML =
        '<input type="checkbox">' +
            item.title;
    // display new div on page
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Gets the user input todo item
 * from the form
 */
function getItem() {
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
var theStorageKey = 'MyItems';
function saveToDoItems(items) {
    localStorage.setItem(theStorageKey, JSON.stringify(items));
}
function getToDoItems() {
    var data = localStorage.getItem(theStorageKey);
    if (data == null) {
        return new Array();
    }
    return JSON.parse(data);
}
function showAllToDoItems() {
    var div = document.getElementById('todo');
    div.innerHTML = '';
    var allTodo = getToDoItems();
    for (var i = 0; i < allTodo.length; i++) {
        var toDo = allTodo[i];
        displayToDoItem(toDo);
    }
}
