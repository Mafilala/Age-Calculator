import "./display.styles.css";

const Display = ({ day, month, year }) => {
  let info = {
    d: "--",
    m: "--",
    y: "--",
  };

  if (day && month && year) {
    const bd = new Date(year + "-" + month + "-" + day);
    if (!isNaN(bd) && bd.toString() !== "Invalid Date") {
      const nw = Date.now();
      const now = new Date(nw);
      const dif = now - bd;
      const diff = new Date(dif);

      (info.d = diff.getDate()),
        (info.m = diff.getMonth()),
        (info.y = diff.getFullYear() - 1970);
    }
  }
  return (
    <div className="age-viewer">
      <h2>
        <span>{info.y}</span> years
      </h2>
      <h2>
        <span>{info.m}</span> months
      </h2>
      <h2>
        <span>{info.d}</span> days
      </h2>
    </div>
  );
};

export default Display;
