const listElem = document.querySelector('.repo-list');

export const cleanerReposList = () => {
  listElem.innerHTML = '';
};
export const renderRepos = reposList => {
  const reposListItemsElems = reposList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;
    return listItemElem;
  });
  cleanerReposList();
  listElem.append(...reposListItemsElems);
};
