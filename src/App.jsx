import { useState } from "react";
import "./App.css";
import DateInput from "./component/date-input/date-input.component";
import Display from "./component/display/display.component";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="ageCalculator">
      <DateInput
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
      <div className="separator">
        <div className="line1"></div>
        <div className="icon"></div>
        <div className="line2"></div>
      </div>
      <Display day={day} month={month} year={year} />
    </div>
  );
};

export default App;
