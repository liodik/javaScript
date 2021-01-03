export const shmoment = date => {
  let newDate = new Date(date);

  const calc = {
    add(period, value) {
      const result = {
        milliseconds: value => newDate.setMilliseconds(newDate.getMilliseconds() + value),
        seconds: value => newDate.setSeconds(newDate.getSeconds() + value),
        minutes: value => newDate.setMinutes(newDate.getMinutes() + value),
        hours: value => newDate.setHours(newDate.getHours() + value),
        months: value => newDate.setMonth(newDate.getMonth() + value),
        years: value => newDate.setFullYear(newDate.getFullYear() + value),
      };
      newDate = new Date(result[period](value));
      return calc;
    },

    subtract(period, value) {
      const result = {
        milliseconds: value => newDate.setMilliseconds(newDate.getMilliseconds() - value),
        seconds: value => newDate.setSeconds(newDate.getSeconds() - value),
        minutes: value => newDate.setMinutes(newDate.getMinutes() - value),
        hours: value => newDate.setHours(newDate.getHours() - value),
        months: value => newDate.setMonth(newDate.getMonth() - value),
        years: value => newDate.setFullYear(newDate.getFullYear() - value),
      };

      newDate = new Date(result[period](value));
      return calc;
    },

    result() {
      return newDate;
    },
  };
  return calc;
};

// const res = shmoment(new Date(2020, 10, 4, 0, 0, 0, 0))
//   .add('hours', 10)
//   .add('minutes', 10)
//   .subtract('years', 2)
//   .result();
// console.log(res);
