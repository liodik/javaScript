export const addImage = imgSrc => {
  const p = new Promise((resolve, regect) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'my photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => regect(new Error('Image load is failed...')));
  });
  return p;
};
