const http = new EasyHTTP();

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))


const data = {
  name: 'Paul Thi',
  username: 'paulthi',
  email: 'paulthi@gmail.com'
}

// Post Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(error => console.log(error))

// PUT Users
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(error => console.log(error))

// Delete Users
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((data) => console.log(data))
.catch(error => console.log(error))
