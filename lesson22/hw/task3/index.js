<<<<<<< HEAD
const checkboxElem = document.querySelector('.task-status');
// console.log(checkboxElem.checked);
const checkFunc = () => {
  checkboxElem.checked ? console.log(true) : console.log(false);
};
checkboxElem.addEventListener('change', checkFunc);
=======
export const getTitle = () => {
  return document.querySelector('.title').textContent;
};

// console.log(getTitle());

export const getDescription = () => {
  return document.querySelector('.about').innerText;
};

// console.log(getDescription());

export const getPlans = () => {
  return document.querySelector('.plans').innerHTML;
};

// console.log(getPlans());

export const getGoal = () => {
  return document.querySelector('.goal').outerHTML;
};

// console.log(getGoal());
>>>>>>> bae092e5cd70a7d75d159fef978cb848fe08ab8c
