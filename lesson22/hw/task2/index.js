const inputElem = document.querySelector('.text-input');

const inputFunc = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', inputFunc);
