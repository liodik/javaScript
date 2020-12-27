const clickButton = document.querySelectorAll('.btn');
const buttonArr = Array.from(clickButton);
console.log(buttonArr);
const handleClick = event => {
  const text = event.target.textContent;
  console.log(text);
};

buttonArr[0].addEventListener('click', handleClick);
buttonArr[1].addEventListener('click', handleClick);
