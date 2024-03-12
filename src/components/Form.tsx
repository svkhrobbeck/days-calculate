import { FC, useEffect, useState } from "react";
import months from "../data/months.json";

import * as Types from "../interfaces";

interface IFormProps {
  updateState: (data: Types.Months.IState) => void;
}

const Form: FC<IFormProps> = ({ updateState }) => {
  const [yearInfo, setYearInfo] = useState<number | null>(null);
  const [dateInfo, setDateInfo] = useState<number | null>(null);
  const [monthInfo, setMonthInfo] = useState<Types.Months.IMonthInfo>({
    order: null,
    name: { uz: "selectionMonth", en: null },
  });

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const years = Array.from({ length: 100 }, (_, i) => currentYear + 1 - (i + 1));
  const filteredMonths =
    currentYear === yearInfo ? months.filter(m => m.order <= currentMonth) : months;

  const filteredDays =
    currentYear === yearInfo && currentMonth === monthInfo.order
      ? Array.from({ length: currentDay }, (_, i) => currentDay - i).reverse()
      : Array.from(
          { length: months.find(m => m.order === monthInfo.order)?.days || 0 },
          (_, i) => i + 1
        );

  useEffect(() => {
    setMonthInfo({ name: { uz: "selectionMonth", en: null }, order: null });
    setDateInfo(null);
  }, [yearInfo]);

  return (
    <form className="form">
      <h2 className="form__title">Yashagan kunlarni hisoblash</h2>
      <div className="form__inner">
        <select
          value={(yearInfo as number) || "selectionYear"}
          onChange={e => setYearInfo(+e.target.value)}
        >
          <option value="selectionYear" disabled hidden>
            yilni tanlang
          </option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          disabled={!yearInfo}
          value={
            monthInfo.order
              ? `${monthInfo.name.uz}-${monthInfo.name.en}-${monthInfo.order}`
              : "selectionMonth"
          }
          onChange={e => {
            const [uz, en, order] = e.target.value.split("-");

            setMonthInfo({ name: { uz, en }, order: +order });
          }}
        >
          <option value="selectionMonth" disabled hidden>
            oyni tanlang
          </option>
          {filteredMonths.map(month => (
            <option key={month.order} value={`${month.name.uz}-${month.name.en}-${month.order}`}>
              {month.name.uz}
            </option>
          ))}
        </select>

        <select
          disabled={!monthInfo.order}
          value={(dateInfo as number) || "selectionDate"}
          onChange={e => setDateInfo(+e.target.value)}
        >
          <option value="selectionDate" disabled hidden>
            sanani tanlang
          </option>
          {filteredDays.map(date => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={!dateInfo}
          onClick={() => updateState({ date: dateInfo, month: monthInfo.name.en, year: yearInfo })}
        >
          hisoblash
        </button>
      </div>
    </form>
  );
};
export default Form;
