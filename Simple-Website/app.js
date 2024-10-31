//Can get the errors easily heehehehehe
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    //Use toggle method to modify the body
    //This method adds or remove the class
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = "Dark";
    } else{
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if(taskInput.value.trim() === ""){
        alert("No TASk DETECTED!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = "task-item";

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskText = document.createTextNode(taskInput.value);

    //Append the checkbox and task text to the list item
    listItem.appendChild(checkBox);
    listItem.appendChild(taskText);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
     taskInput.value = "";
}

function clearTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    taskList.innerHTML = "";
    taskInput.value = "";
}