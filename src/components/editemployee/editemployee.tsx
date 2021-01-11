import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";

function EmployeeSalaryInfo() {
  return <h2>Employee Salary Details...</h2>;
}

function EmployeeProjectInfo() {
  return <h2>Employee Project Details...</h2>;
}

function EmployeePersonalInfo(props: any) {
  const [employee, setEmployee]: any[] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });
  function changeEmployeeData(e: any) {
    return console.log(employee.map((emp: any) => emp.id));
  }
  return (
    <div>
      <h2>Employee Details...</h2>
      <div>
        <label>
          Employee ID :{" "}
          <input
            type="text"
            name="Id"
            value={employee.id}
            onChange={changeEmployeeData}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Name :{employee.name}
          <input
            type="text"
            name="Name"
            value={employee.name}
            onChange={changeEmployeeData}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Location :{" "}
          <input
            type="text"
            name="Location"
            value={employee.email}
            onChange={changeEmployeeData}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Salary :{" "}
          <input
            type="text"
            name="Salary"
            value={employee.body}
            onChange={changeEmployeeData}
          />
        </label>
      </div>
      <button>Update</button>
    </div>
  );
}
function EditEmployee(props: any) {
  return (
    <div>
      <Link to={"/employee/" + props.match.params.id}>Personal</Link>{" "}
      &nbsp;&nbsp;
      <NavLink
        to={"/employee/" + props.match.params.id + "/salary"}
        activeClassName="testClass"
      >
        Salary
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={"/employee/" + props.match.params.id + "/projects"}
        activeClassName="testClass"
      >
        Projects
      </NavLink>
      <Switch>
        <Route
          exact
          path="/employee/:id/personal"
          component={EmployeePersonalInfo}
        />
        <Route path="/employee/:id/salary" component={EmployeeSalaryInfo} />
        <Route path="/employee/:id/projects" component={EmployeeProjectInfo} />
      </Switch>
    </div>
  );
}

export default EditEmployee;
