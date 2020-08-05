import endpoints from '../constants/endpoints';

function getUser() {
  return fetch(endpoints.userUrl).then(response => response.json());
}

function getRepos() {
  return fetch(endpoints.reposUrl).then(response => response.json());
}

export default {
  getUser,
  getRepos
};
