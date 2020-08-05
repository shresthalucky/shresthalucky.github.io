const baseUrl = 'https://api.github.com/users';

const username = 'shresthalucky';
const userUrl = `${baseUrl}/${username}`;
const reposUrl = `${userUrl}/repos`;

export default {
  baseUrl,
  userUrl,
  reposUrl,
};
