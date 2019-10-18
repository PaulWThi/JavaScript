// const id = 100;
// var bool = id === 101 ? true : false;
// console.log(bool ? 'yes' : 'no');

// function knight(firstName = 'Flex', lastName = 'Boy') {
//   return `Sir ${firstName} ${lastName}`;
// }
// let first;
// let last;
// console.log(knight(first, last));
// first = 'Paul';
// last = 'Thi';
// console.log(knight(first, last));

// (function(firstName = 'Elizabeth', lastName = 'Turner') {
//   console.log(`Madamn ${firstName} ${lastName}`)
// })('Zoe', 'Liu');

// const li = document.createElement('li');

// li.className = 'collection-item';

// li.appendChild(document.createTextNode('Hello World'));

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// const list = document.querySelector('ul.collection').appendChild(li);

// console.log(li);
// console.log(list);

// let select = document.querySelector('.clear-tasks').addEventListener('mouseover', onclick);

// function onclick(e) {
//   let val;
//   val = e;

//   val = e.type;


//   console.log(val);
// }

const d = document
const clearBtn = d.querySelector('.clear-tasks');
const card = d.querySelector('.card');
const heading = d.querySelector('h5');

// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);

// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);

card.addEventListener('mousemove', runEvent);

function runEvent(e) {
  const eventType = e.type;
  const x = e.offsetX;
  const y = e.offsetY;

  let text;
  
  heading.textContent = `MouseX: ${x} MouseY: ${y}`

  d.body.style.background = `rgb(${x}, ${y}, ${(x/2)+(y/2)})`;

  /*
  switch (eventType) {
    case 'mouseenter':
      text = heading.innerHTML = `<h1>u gae</h1>`;// = `EVENT TYPE: ${e.type.innerText}`;
      break;
    case 'mouseleave':
      text = heading.innerHTML = `<h5>Tasks</h5>`;
      break;
  }
  */
  console.log(text);
}