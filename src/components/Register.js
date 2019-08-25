import React, { useState } from "react";
import axios from "axios";
import loginKey from "../img/login-key.png";
import { Button, TextField, Window, WindowHeader } from "react95";

const Register = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#208c71",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Register
          </span>
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
            className="register-window-text"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span style={{ padding: "1rem 0" }}>
              Type a username and password to register an account.
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
              <TextField />
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
              <TextField />
            </div>
          </div>
          <div
            className="register-window-button"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%"
            }}
          >
            <Button style={{ marginTop: "1.5rem" }}>Go!</Button>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Register;
