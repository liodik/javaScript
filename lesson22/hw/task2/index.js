<<<<<<< HEAD
const inputElem = document.querySelector('.text-input');

const inputFunc = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', inputFunc);
=======
const checkboxElem = document.querySelector('.task-status');
// console.log(checkboxElem.checked);
const checkFunc = () => {
  checkboxElem.checked ? console.log(true) : console.log(false);
};
checkboxElem.addEventListener('change', checkFunc);
>>>>>>> bae092e5cd70a7d75d159fef978cb848fe08ab8c
