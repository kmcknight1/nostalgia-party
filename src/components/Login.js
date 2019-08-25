import React, { useState } from "react";
import axios from "axios";
import loginKey from "../img/login-key.png";
import { Button, TextField, Window, WindowHeader } from "react95";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(body) {
    axios
      .post("https://nostalgia-party.herokuapp.com/api/auth/login", body)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  return (
    <form
      style={{
        backgroundColor: "#208c71",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onSubmit={e => {
        e.preventDefault();
        const body = { username, password };
        loginUser(body);
      }}
    >
      <Window
        style={{
          height: "13rem",
          width: "42rem"
        }}
      >
        <WindowHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Login</span>
          <Button size="sm">x</Button>
        </WindowHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "80%"
          }}
        >
          <img
            src={loginKey}
            style={{
              width: "6rem",
              height: "6rem",
              alignSelf: "center"
            }}
          />
          <div
            className="login-window-text"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span style={{ padding: "1rem 0" }}>
              Type a username and password to login to your account.
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.3rem 0"
              }}
            >
              <span>Username: </span>
              <TextField
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.3rem 0"
              }}
            >
              <span>Password: </span>
              <TextField
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div
            className="login-window-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%"
            }}
          >
            <Button type="submit" style={{ marginTop: "1rem" }}>
              Ok
            </Button>
            <Button type="reset" style={{ marginTop: "0.5rem" }}>
              Cancel
            </Button>
          </div>
        </div>
      </Window>
    </form>
  );
};

export default Login;
