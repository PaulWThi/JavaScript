const http = new easyHTTP();

// Get All Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, reponse) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(reponse);
//   }
// });

// Get Single Post (Gets depending on endpoint)
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, reponse) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(reponse);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Post Post (Adds to end)
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, reponse) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(reponse);
//   }
// });

// Put Post (Adds to location depending on endpoint)
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, reponse) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(reponse);
//   }
// });

// Delete Post (Deletes depending on endpoint)
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, reponse) {
  if(err) {
    console.log(err);
  } else {
    console.log(reponse);
  }
});