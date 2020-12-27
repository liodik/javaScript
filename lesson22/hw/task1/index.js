export const getTitleElement = () => {
  const titleElement = document.querySelector('.title');
  console.dir(titleElement);
  return titleElement;
};

// console.log(getTitleElement());

export const getInputElement = () => {
  const inputElement = document.querySelector('input[type=text]');
  console.dir(inputElement);
  return inputElement;
};
// console.log(getInputElement());
