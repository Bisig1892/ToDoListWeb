window.onload = function(){
    let addBtn = <HTMLElement> document.querySelector('form > input[type=submit]')
    addBtn.onclick = main;
};
/**
 * Represents a single task on a todo list
 */
class ToDoItem {
    title:string;
    deadline:Date;
    isCompleted:boolean;
    
    constructor(task:string) {
        this.title = task
    }
}

function main() {
    let item:ToDoItem = getItem();
    // Display new ToDoItem from page
    displayToDoItem(item);
    // Save ToDoItem
}
/**
 * Gets the user input todo item from the form.
 */
function getItem():ToDoItem{
    let title = (<HTMLInputElement> document.getElementById('title')).value; 
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement> document.getElementById('deadline')).value;
    item.deadline = new Date(deadline);
}
/**
 * Displays ToDoItem on the page
 * @param item 
 */
function displayToDoItem(item:ToDoItem):void {
    let div = document.createElement('div');
    div.innerHTML = '<input type="checkbox">' + item.title;
    let displayDiv = document.getElementById('todo');
    displayDiv.appendChild(div);
}
