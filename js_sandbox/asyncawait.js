// async function myFunct() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   });
//   const error = false;
//   if(!error) {
//     const response = await promise; // Wait until promise is resolved
//     return response;
//   } else {
//     await Promise.reject(new Error('Somethign went wrong'))
//   }
// }

// myFunct()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

async function getUsers() {
  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //only proceed once resolved
  const data = await response.json();
  //proceed once second promise resolved
  return data;
}

getUsers().then(users => console.log(users));