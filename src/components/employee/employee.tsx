import React from "react";
import { useState, useEffect } from "react";

function Employee() {
  const [employees, setEmployees]: any = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(result => {
        setEmployees(result);
      });
  });

  return (
    <div>
      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>postId</th>
            <th>Name</th>
            <th>email</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp: any) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.postId}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.body}</td>
              <td>
                <a href={"/employee/" + emp.id}>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
