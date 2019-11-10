class GitHub {
  constructor () {
    this.client_id = '9166449f2dd7919a00ea';
    this.client_secret = '79439cd33f335c782d7e61f7eabe5adc22dbc283';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}