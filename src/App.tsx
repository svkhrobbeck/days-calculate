import * as Types from "./interfaces";
import Form from "./components/Form";
import { useState } from "react";
import CalcedDays from "./components/CalcedDays";
import calculateDates from "./utils/calculateDates";

const App = () => {
  const [state, setState] = useState<Types.Months.IState>({ year: null, month: null, date: null });
  const updateState = (data: Types.Months.IState) => setState(data);

  calculateDates("15 march");

  const date = new Date();

  return (
    <div className="root">
      <h2 className="root__title">
        Bugun <span className="root__title-crimson">{date.getFullYear()}</span>-yilning{" "}
        <span className="root__title-orange">{calculateDates(date)}</span>-kuni
      </h2>
      <div className="frame">
        <Form {...{ updateState }} />
        {state.date && <CalcedDays {...state} />}
      </div>
    </div>
  );
};

export default App;
