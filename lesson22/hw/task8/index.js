const checkboxElem = document.querySelector('.task-status');

const checkboxFunc = event => {
  event.target.checked ? console.log(true) : console.log(false);
};

checkboxElem.addEventListener('change', checkboxFunc);
