// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }


// console.log(items);

const list = document.querySelector('ul.collection');
const listItem = document.querySelectorAll('ul.collection-item:first-child');

val = listItem;
val = list;

val = list.childNodes;
val = list.children;

val = list.children[0];
list.children[1].textContent = 'Hello';

val = list.firstElementChild;
val.textContent = `Hiddm' widda wop!`

console.log(val);