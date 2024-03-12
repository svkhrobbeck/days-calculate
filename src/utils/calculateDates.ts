import months from "../data/months.json";
import * as Types from "../interfaces";
import isLeapYear from "./isLeapYear";

const calculateDates = (dateStr: string | Date | number) => {
  const date = new Date(dateStr);

  const today = {
    year: date.getFullYear(),
    month: months.find(item => item.order === date.getMonth() + 1),
    day: date.getDate(),
  } as Types.Months.IToday;

  const days = months
    .filter(m => m.order < today.month.order)
    .map(m => (m?.linkedWithLeap ? isLeapYear(today.year, 29, m.days) : m.days))
    .reduce((a, b) => a + b, today.day);

  return days;
};

export default calculateDates;
