const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStud = allStudentsList.filter(name => !studentsForRetake.includes(name));
  const message = passedStud.map(name => 'Good job ' + name);
  return message;
};
// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];

// console.log(getMessagesForBestStudents(allStud, retakeStud));
