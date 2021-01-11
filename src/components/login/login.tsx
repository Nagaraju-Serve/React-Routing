import React, { useState } from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import { invalidpath } from "../invalidpath/invalidpath";

function LogIn(props: any) {
  const [loginData, setLoginData] = useState({
    username: "Nagaraju",
    password: "Nagaraju@123",
  });

  function changeLogInData(e: any) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function onLogIn() {
    fetch("http://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((r) => r.json())
      .then((result) => {
        if (
          result.username === "Nagaraju" &&
          result.password === "Nagaraju@123"
        ) {
          props.history.push("/home");
          console.log("------------=======", result);
        } else {
          alert("Invalid UserName or PassWord");
        }
      });
  }

  return (
    <div>
      <h2>Welcome to LogIn...</h2>
      <p>
        <label>
          UserName :{" "}
          <input
            type="text"
            value={loginData.username}
            name="username"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          PassWord :{" "}
          <input
            type="text"
            value={loginData.password}
            name="password"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <button onClick={onLogIn}>LogIn</button>
    </div>
  );
}

function Home(props: any) {
  function onNext() {
    props.history.push("/editprofile");
    props.history.replace("/editprofile");
  }
  return (
    <div>
      <h2>Welcome to Home...</h2>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
function EditProfile() {
  return (
    <div>
      <h2>Welcome to Edit Profile...</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <Link to="/">LogIn</Link>&nbsp;&nbsp;
      {/* <NavLink to="/home" activeClassName="testClass">Home</NavLink>&nbsp;&nbsp; */}
      {/* <NavLink to="/editprofile" activeClassName="testClass">Edit Profile</NavLink> */}
      <Switch>
        <Route exact path="/" component={LogIn}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/editprofile" component={EditProfile}></Route>
        <Route component={invalidpath} />
      </Switch>
    </div>
  );
}

export default Login;
