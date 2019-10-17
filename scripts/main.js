/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = false;
    }
    return ToDoItem;
}());
