import React from "react";
import { useState, useEffect } from "react";

function Department() {
  const [departments, setDepartments]: any = useState([]);
  useEffect(() => {
    fetch("https://localhost:44306/api/Dept")
      .then((res) => res.json())
      .then((result) => {
        setDepartments(result);
      });
  });

  const timeInterval = (e: any) => {
    var number = 0;
    var x: any;
    setInterval(() => {
      console.log(number++);
    }, 1000);
  };

  let timer: number = 10;
  const addItemss = () => {
    var x = document.getElementById("range");
    setInterval(() => {
      console.log(x, timer++);
    }, 1000);
  };

  return (
    <div data-testid="departments">
      <h2>Departments Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d: any) => (
            <tr key={d.Id}>
              <td>{d.Id}</td>
              <td>{d.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addItemss}>Click Me</button>
      <input
        type="range"
        id="range"
        min="0"
        max="100"
        defaultValue={timer}
        value={(timer = timer + 1)}
      />
      {timer}
    </div>
  );
}

export default Department;
