import { useState } from "react";

import * as Types from "./interfaces";
import isLeapYear from "./utils/isLeapYear";
import calculateDates from "./utils/calculateDates";

import { CalcedDays, Footer, Form } from "./components";

const App = () => {
  const [state, setState] = useState<Types.Months.IState>({ year: null, month: null, date: null });
  const updateState = (data: Types.Months.IState) => setState(data);

  const date = new Date();
  const year = date.getFullYear();
  const pastDays = calculateDates(date);

  return (
    <>
      <main className="root">
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
      </main>

      <Footer />
    </>
  );
};

export default App;
