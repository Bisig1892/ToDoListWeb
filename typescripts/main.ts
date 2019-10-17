/**
 * Represents a single task on a todo list
 */
class ToDoItem {
    title:string;
    deadline:Date;
    isCompleted:boolean;
    
    constructor(title:string, deadline:Date) {
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = false;
    }
}