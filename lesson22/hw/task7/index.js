export const createButton = buttonText => {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
};
// createButton('new button');
