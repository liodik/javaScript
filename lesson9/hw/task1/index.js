// const rooms = {
//   room1: [
//     { name: 'room1 name1' },
//     { name: 'room1 name2' },
//     { name: 'room1 name3' },
//     { name: 'room1 name4' },
//   ],
//   room2: [{ name: 'room2 name1' }],
//   room3: [{ name: 'room3 name1' }, { name: 'room3 name2' }, { name: 'room3 name3' }],
// };

// const people = Object.values(rooms);
// console.log(people);
// const arr = people.flat();
// console.log(arr);
// const people = arr.map(el => el.name);
// console.log(people);

const getPeople = rooms => {
  return Object.values(rooms)
    .flat()
    .map(el => el.name);
};

// console.log(getPeople(rooms));
