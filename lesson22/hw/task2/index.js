const checkboxElem = document.querySelector('.task-status');
// console.log(checkboxElem.checked);
const checkFunc = () => {
  checkboxElem.checked ? console.log(true) : console.log(false);
};
checkboxElem.addEventListener('change', checkFunc);
