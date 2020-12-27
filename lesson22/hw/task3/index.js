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
