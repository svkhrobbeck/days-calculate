import * as Types from "./interfaces";
import Form from "./components/Form";
import { useState } from "react";
import CalcedDays from "./components/CalcedDays";
import calculateDates from "./utils/calculateDates";
import isLeapYear from "./utils/isLeapYear";

const App = () => {
  const [state, setState] = useState<Types.Months.IState>({ year: null, month: null, date: null });
  const updateState = (data: Types.Months.IState) => setState(data);

  calculateDates("15 march");

  const date = new Date();
  const year = date.getFullYear();
  const pastDays = calculateDates(date);

  return (
    <div className="root">
      <div className="title-wrapper">
        <h2 className="root__title">
          Bugun <span className="root__title-crimson">{year}</span>-yilning{" "}
          <span className="root__title-orange">{pastDays}</span>-kuni
        </h2>
        <h3 className="root__heading">
          (yangi yilgacha {isLeapYear(date.getFullYear()) - pastDays} kun qoldi)
        </h3>
      </div>
      <div className="frame">
        <Form {...{ updateState }} />
        {state.date && <CalcedDays {...state} />}
      </div>
    </div>
  );
};

export default App;
