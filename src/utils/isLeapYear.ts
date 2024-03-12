const isLeapYear = (year: number, trueValue: number = 366, falseValue: number = 365) => {
  if (year % 400 === 0) {
    return trueValue;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return trueValue;
  } else return falseValue;
};

export default isLeapYear;
