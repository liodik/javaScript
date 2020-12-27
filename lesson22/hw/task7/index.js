const textInput = document.querySelector('.text-input');

const eventFunc = event => {
  const text = event.target.value;
  console.log(text);
};

textInput.addEventListener('change', eventFunc);
