let val;

const form = document.querySelector('form');
val = form;
const taskInput = document.querySelector('input');
// val = taskInput;

taskInput.value = '';

// form.addEventListener('submit', runEvent);
form.addEventListener('keydown', runEvent);

function runEvent(e) {
  let type = e.type
  console.log(`EVENT TYPE: ${type}`);
  switch (type) {
    case 'submit':
      e.preventDefault()
      break;
    case 'keydown':
      let heading = document.querySelector('h5');
      heading.textContent = `Sir ${e.target.value} Flexalot`;
      console.log(`TASK INPUT: ${e.target.value}`);
      break;
  }
  
  
  // console.log(`TASK INPIT: ${taskInput.value}`);
  // e.preventDefault();
}

console.log(val);
console.log(form);
