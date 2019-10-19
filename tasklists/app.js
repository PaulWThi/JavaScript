// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks events
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

createAppendTask('Walk Dog');
createAppendTask('Eat Rice');
createAppendTask('Do Work');

// Add Task
function addTask(e) {
  console.log(`Adding task: ${e.target}`)

  if(taskInput.value === '') {
    alert('Add a task');
  }

  let task = taskInput.value
  console.log(typeof task)

  createAppendTask(task)

  // Clear input
  task = '';

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

function removeTask(e) {
  // console.log(e.target)
  if (e.target.parentElement.classList.contains('delete-item')) {
    const task = e.target.parentElement.parentElement;
    const taskString = task.textContent;
    if (confirm('You sure?')) {
      console.log(`Deleting: ${taskString}`);
      task.remove();
    }
  }
}

function clearTasks(e) {
  console.log(e.target);
  // console.log(taskList.innerHTML);
  // taskList.innerHTML = '';
  // console.log(taskList.innerHTML);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}



function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const taskListArray = Array.from(taskList.getElementsByClassName('collection-item'));

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