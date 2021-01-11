import React from "react";
import "./App.scss";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import employee from "./components/employee/employee";
import departments from "./components/departments/departments";
import editemployee from "./components/editemployee/editemployee";
import project from "./components/project/project";
import invalidpath from "./components/invalidpath/invalidpath";
import Login from "./components/login/login";

function App() {
  return (
    <div data-testid="App">
      <Login />
      <hr />
      <ul>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
        <li>
          <NavLink to="/Departments" activeClassName="testClass">
            Department
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="testClass">
            Projects
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/employee" component={employee} />
        <Route path="/employee/:id" component={editemployee} />
        <Route path="/departments" component={departments} />
        <Route path="/projects" component={project} />
        <Route path="/departments" component={employee} />
        <Route component={invalidpath} />
      </Switch>
    </div>
  );
}

export default App;
