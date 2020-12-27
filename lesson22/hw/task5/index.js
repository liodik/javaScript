const singleUseButton = document.querySelector('.single-use-btn');

const clicFunc = () => {
  console.log('clicked');
  singleUseButton.removeEventListener('click', clicFunc);
};

singleUseButton.addEventListener('click', clicFunc);
