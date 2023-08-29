import "./date-input.styles.css";
import Input from "../input/input.component";

const DateInput = ({ day, month, year, setDay, setMonth, setYear }) => {
  return (
    <div className="date_input">
      <Input type="day" val={day} setVal={setDay} />
      <Input type="month" val={month} setVal={setMonth} />
      <Input type="year" val={year} setVal={setYear} />
    </div>
  );
};

export default DateInput;
