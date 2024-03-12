const isLeapYear = (year: number, trueDays: number = 366, falseDays: number = 365) => {
  if (year % 400 === 0) {
    return trueDays;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return trueDays;
  } else return falseDays;
};

export default isLeapYear;
