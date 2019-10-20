let num = Number('10');
console.log(num);
console.log(typeof num);
if (typeof num === 'string') {
  console.log(num.length);
} else if (typeof num === 'number') {
  console.log(num.toFixed(2));
}