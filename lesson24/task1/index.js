export const dayOfWeek = (date, days) => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

// console.log(dayOfWeek(new Date(2020, 11, 29), 2));
