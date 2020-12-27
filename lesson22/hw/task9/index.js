const buttonElements = document.querySelectorAll('.pagination__page');
const buttonElementsArr = Array.from(buttonElements);
// console.log(buttonElementsArr[0].dataset.pageNumber);
const handleClick = event => {
  // console.log(event);
  const res = event.target.dataset.pageNumber;
  console.log(res);
};

const result = buttonElementsArr.map(btn => btn.addEventListener('click', handleClick));

// buttonElementsArr[0].addEventListener('click', handleClick);
