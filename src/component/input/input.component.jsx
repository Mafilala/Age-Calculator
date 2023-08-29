import "./input.styles.css";

const Input = ({ type, val, setVal }) => {
  let ph = "";
  let valid = true;
  if (type === "day") {
    valid = 0 <= parseInt(val) && parseInt(val) <= 31;
    ph = "DD";
  }
  if (type === "month") {
    valid = 0 <= parseInt(val) && parseInt(val) <= 12;
    ph = "MM";
  }
  if (type === "year") {
    let n = Date.now();
    const nn = new Date(n);
    const year = nn.getFullYear();
    valid = parseInt(val) < parseInt(year);
    ph = "YY";
  }
  let errorMessage = "";
  if (!val) errorMessage = "This field is required";
  else if (!valid) {
    errorMessage = `Must be a valid ${type}`;
    if (type == "year") errorMessage = "Must be in the past";
  }

  return (
    <div className={`${!val || !valid ? "warning " : ""}button-container`}>
      <h3>{type}</h3>
      <input
        placeholder={ph}
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className={(valid ? "valid" : "invalid") + ` input`}
      />
      <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
