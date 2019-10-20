// Define UI Vars
const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      clearBtn = document.querySelector('.clear-tasks'),
      filter = document.querySelector('#filter'),
      taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks events
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

// Adds default list
createAppendTask('Walk Dog');
createAppendTask('Eat Rice');
createAppendTask('Do Work');

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    createAppendTask(task);
  });
}

// Add Task
function addTask(e) {
if(taskInput.value === '') {
    alert('Add a task');
  }

  let task = taskInput.value

  createAppendTask(task)

  console.log(task);
  // Store in LS
  storeTaskInLocalStorage(task);

  // Clear input
  console.log(task);
  taskInput.value = '';

  e.preventDefault();
}

function createAppendTask(task) {
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);  
  // Append li to ul
  taskList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  // console.log(e.target)
  if (e.target.parentElement.classList.contains('delete-item')) {
    const task = e.target.parentElement.parentElement,
          taskString = task.textContent;
    if (confirm('You sure?')) {
      console.log(`Deleting: ${taskString}`);
      task.remove();

      // Remove from LS
      removeTaskFromLocalStorage(taskString);
    }
  }
}

function removeTaskFromLocalStorage(taskString) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if (taskString == task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage(); 
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}


// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase(),
        taskListArray = Array.from(taskList.getElementsByClassName('collection-item'));

  taskListArray.forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

  // document.querySelectorAll('collection-item').forEach(function(task) {
  //   const item = task.firstChild.textContent;
  //   if (item.toLowerCase().indexOf(text) != -1) {
  //     task.style.display = 'block';
  //   } else {
  //     task.style.display = 'none';
  //   }
  // });

}