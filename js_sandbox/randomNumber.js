function rando() {
  return Math.round(Math.random() * 100 + 1)
}
console.time('Find Number');
let randomNumber = rando();
let counter = 0;
for (; randomNumber != 100; randomNumber = rando(), counter++) {
  console.log('we in here! ' + randomNumber);
}
console.timeEnd('Find Number');
console.log('Finally, we hit random number ' + randomNumber + ' after ' + counter + ' attempts!');