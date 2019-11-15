const gitHub = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    gitHub.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.clearAlert();
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
    } else {
      ui.clearAlert();
      ui.clearProfile();
    } 
});