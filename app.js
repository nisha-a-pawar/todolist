// target the inputbox and button by using id
const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('addTask');
const deleteBtn=document.getElementById('deleteTask');
const taskItemElement = document.getElementById('taskItems');

// create an empty array to store our todo list items
let tasksList = [];


// function to render the list
function renderTasks() {
    taskItemElement.innerText = "";
    inputTask.value="";
    for (let i = 0; i <= tasksList.length - 1; i++) {
        let newTask = document.createElement('li');  //create a new <li></li> inside our <ol>tag using createElement
        newTask.innerText = tasksList[i];   // add the value to <li>Value</li>
        taskItemElement.appendChild(newTask);    // append the element to ol --> li

    }
}

//  function to save our tasks inside ordered list
   function addTodo() {
    tasksList.push(inputTask.value);  //add value from inputbox to our array
    renderTasks();

   }

//function to delete the items in ordered list
function removeTodo(){
    tasksList.pop();
    renderTasks();   //to display the remainig list
}





// Save on clicking addBTN
addBtn.addEventListener('click', addTodo);

//delete on clicking deleteBtn
deleteBtn.addEventListener('click',removeTodo)