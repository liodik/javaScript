export const finishlist = () => {
  const listItem1 = document.createElement('li');
  listItem1.textContent = '1';
  document.querySelector('ul').prepend(listItem1);

  const listItem4 = document.createElement('li');
  listItem4.textContent = '4';
  document.querySelector('.special').before(listItem4);

  const listItem6 = document.createElement('li');
  listItem6.textContent = '6';
  document.querySelector('.special').after(listItem6);
  const listItem8 = document.createElement('li');
  listItem8.textContent = '8';
  document.querySelector('ul').append(listItem8);
};
// finishlist();
