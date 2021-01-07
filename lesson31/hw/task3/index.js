export function delay(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, interval);
  });
}
// delay(3000).then(() => console.log('Done'));
