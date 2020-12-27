export const squaredNumbers = () => {
  const elements = document.querySelectorAll('.number');
  const arrOfItem = Array.from(elements);
  arrOfItem.map(item => (item.dataset.squaredNumber = item.dataset.number ** 2));
};

// squaredNumbers();
