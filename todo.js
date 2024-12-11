// function addTask(){
//    var taskInput= document.getElementById("new-task")
//    var taskList=document.getElementById("task-list")
//    if(taskInput.value==="")
//     {
//     alert("please enter the task")
//     return

//     }
//     var listItem=document.createElement('li')
//     listItem.innerText=taskInput.value

//     var buttonContainer=document.createElement('div')
//     buttonContainer.className='task-button'

//     var deletebutton=document.createElement('button')
//     deletebutton.innerText='Delete'
//     deletebutton.onclick=function()
//     {
//         taskList.removeChild(listItem)

//     }
//     var completebutton=document.createElement('button')
//     completebutton.innerText='Complete'
//     completebutton.onclick=function()
//     {
//         listItem.classList.toggle('complete')
//     }
//     buttonContainer.appendChild(deletebutton)
//     buttonContainer.appendChild(completebutton)
//     listItem.appendChild(buttonContainer)
//     taskList.appendChild(listItem)
//     taskItem.value=""
    

// }
// var completebutton=GamepadButton.createElement('button')
// completebutton.innerText='complete'
// completebutton.onclick=function(){
//     listItem.classList.toggle('completed')
// }
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-list");

    // If the input field is empty, show an alert and stop the function
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item (li) to hold the task
    var listItem = document.createElement('li');
    listItem.innerText = taskInput.value;

    // Create a container to hold the buttons (Delete and Complete)
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-buttons';

    // Create the "Delete" button
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete'); // Add the delete button class
    deleteButton.onclick = function() {
        taskList.removeChild(listItem); // Remove the task from the list
    };

    // Create the "Complete" button
    var completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete'); // Add the complete button class
    completeButton.onclick = function() {
        listItem.classList.toggle('completed'); // Toggle the completed class on the task
    };

    // Append the buttons to the button container
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(completeButton);

    // Append the button container to the list item
    listItem.appendChild(buttonContainer);

    // Append the new task item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = "";
}
