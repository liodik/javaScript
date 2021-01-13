import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanerReposList } from './repo.js';
import { showSpiner, hideSpiner } from './spiner.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const defaulUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};
renderUserData(defaulUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpiner();
  cleanerReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(error => {
      alert(error.message);
    })
    .finally(() => {
      hideSpiner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
