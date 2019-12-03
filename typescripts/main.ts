/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        this.title = task;
    }
}

let myItem = new ToDoItem("Finish class");


window.onload = function(){
    let addBtn = <HTMLElement>
        document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
    showAllToDoItems()
};

function main(){
    let item:ToDoItem = getItem();

    displayToDoItem(item);

    let allItems = getToDoItems();
    allItems.push(item); //Adds new items to allItems list
    saveToDoItems(item);

    for(let i = 0; i < allItems.length; i++) {
        allItems[i].title;
    }
}

/**
 * Move selected task to completed section
 * of the web page
 */
function markAsComplete(theStorageKey) {
    let currItem = <HTMLDivElement>this;

    let completedItems =
        document.getElementById("completed");
    
    completedItems.appendChild(currItem);
    Cookies.get(theStorageKey);
    Cookies.remove(theStorageKey);
}

/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item:ToDoItem):void {
    let div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = 
        '<input type="checkbox">' +
            item.title;

    console.log(div);
    // display new div on page
    let displayDiv = 
        document.getElementById("todo");
    displayDiv.appendChild(div);
}

/**
 * Gets the user input todo item
 * from the form
 */
function getItem():ToDoItem{
    let title = (<HTMLInputElement>
        document.getElementById("title")).value;
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement>
        document.getElementById("deadline")).value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;

    return item;
}

const theStorageKey = 'MyItems';

function saveToDoItems(i:ToDoItem):void {
    let items = getToDoItems();
    let data = JSON.stringify(items)
    localStorage.setItem(theStorageKey, data);
}

function getToDoItems():ToDoItem[] {
    let data = localStorage.getItem(theStorageKey);

    if(data == null) {
         return new Array();
    }
    return <ToDoItem[]>JSON.parse(data);
}

function showAllToDoItems() {
    let div = document.getElementById('todo');
    div.innerHTML = '';
    let allTodo = getToDoItems();
    for (let i = 0; i < allTodo.length; i++) {
        let toDo = allTodo[i];
        displayToDoItem(toDo);
    }
}
