import { useState } from "react";
// import "./parl.css";

function removeValFromArray(array, item) {
  return array.filter((f) => f !== item);
}

export default function App() {
  const [selectedColumns, setSelctedColumns] = useState([]);

  function onHandler(col, checked) {
    if (checked) {
      if (!selectedColumns.includes(col)) {
        setSelctedColumns([...selectedColumns, col]);
      }
    } else {
      let temp = removeValFromArray(selectedColumns, col);
      setSelctedColumns(temp);
    }
  }

  return (
    <div >
      <form>
        <label>One</label>
        <input
          type="checkbox"
          value="One"
          checked={selectedColumns.includes("One")}
          onChange={(e) => {
            onHandler(e.target.value, e.target.checked);
          }}
        />
        <label>Two</label>
        <input
          type="checkbox"
          value="Two"
          checked={selectedColumns.includes("Two")}
          onChange={(e) => {
            onHandler(e.target.value, e.target.checked);
          }}
        />
        <label>Three</label>
        <input
          type="checkbox"
          value="Three"
          checked={selectedColumns.includes("Three")}
          onChange={(e) => {
            onHandler(e.target.value, e.target.checked);
          }}
        />
      </form>
      <br />
      <h3>Selected Columns</h3>
      <ul>
        {selectedColumns.map((col) => {
          return <li>{col}</li>;
        })}
      </ul>
    </div>
  );
}
