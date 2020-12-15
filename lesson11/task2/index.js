const sortContacts = (arr, isAsc) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.sort((el1, el2) => {
    if (isAsc === false) {
      return el2.name.localeCompare(el1.name);
    } else {
      return el1.name.localeCompare(el2.name);
    }

    // return isAsc ? el1.name.localeCompare(el2.name) : el2.name.localeCompare(el1.name);
  });
  return result;
};

// const arr = [
//   { name: 'Tom', phoneNumber: '777-77-77' },
//   { name: 'Dom', phoneNumber: '777-77-77' },
//   { name: 'Vom', phoneNumber: '777-77-77' },
//   { name: 'Gom', phoneNumber: '777-77-77' },
//   { name: 'Rom', phoneNumber: '777-77-77' },
// ];
// console.log(sortContacts(arr));
