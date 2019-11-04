document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('data.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(error => console.log(error))
}

function getJSON() {
  fetch('customers.json')
    .then(reponse => reponse.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.name}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}