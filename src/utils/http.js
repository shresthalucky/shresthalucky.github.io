import endpoints from '../constants/endpoints';

function handleError(response) {
  if (!response.ok) {
    throw Error(response);
  }

  return response;
}

function getUser() {
  return fetch(endpoints.userUrl)
    .then(handleError)
    .then(response => response.json());
}

function getRepos() {
  return fetch(endpoints.reposUrl)
    .then(handleError)
    .then(response => response.json());
}

export default {
  getUser,
  getRepos
};
