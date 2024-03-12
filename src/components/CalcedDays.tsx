import { FC } from "react";
import months from "../data/months.json";
import * as Types from "../interfaces";
import isLeapYear from "../utils/isLeapYear";
import calculateDates from "../utils/calculateDates";

const CalcedDays: FC<Types.Months.IState> = ({ date, month, year }) => {
  const specialDateStr = `${date} ${month} ${year}`;
  const specialDate = new Date(specialDateStr);
  const currentDate = new Date();

  const todayInfo = {
    year: currentDate.getFullYear(),
    month: months.find(item => item.order === currentDate.getMonth() + 1),
    day: currentDate.getDate(),
  } as Types.Months.IToday;

  const specialDayInfo = {
    year: specialDate.getFullYear(),
    month: months.find(item => item.order === specialDate.getMonth() + 1),
    day: specialDate.getDate(),
  } as Types.Months.IToday;

  const diffYears = todayInfo.year - specialDayInfo.year;
  const dateStr = `${todayInfo.day} ${todayInfo.month.name.en} ${todayInfo.year}`;

  const days =
    [...Array.from({ length: diffYears }, (_, i) => todayInfo.year - i - 1), todayInfo.year]
      .map(year => isLeapYear(year))
      .reduce((a, b) => a + b) -
    (calculateDates(specialDateStr) + (isLeapYear(todayInfo.year) - calculateDates(dateStr)));

  return (
    <p className="calculated">
      Siz <span className="calculated-blue">{days}</span> kundan buyon yashab kelyapsiz
    </p>
  );
};

export default CalcedDays;
