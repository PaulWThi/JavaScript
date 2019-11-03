document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
  
  xhr.onload = function() {
    const response = JSON.parse(this.responseText);
    if(this.status === 200) {
      let output = '';
      if(response.type === 'success') {
        console.log('sucessful load...');
        let values = response.value;
        values.forEach(value => {
          console.log(value.joke);
          output += `<ul><li>${value.joke}</li></ul>`;
        });
      }
      else {
        output += '<ul><li>Something went wrong</li></ul>'
      }
      document.querySelector('.jokes').innerHTML = output;
      document.getElementById('jokes').innerHTML = output;
    } else {
      console.log('failed load...');
    }
  }

  xhr.send();

  e.preventDefault();
}