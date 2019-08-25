import React, { useState } from "react";
import loginKey from "../img/login-key.png";
import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  List,
  ListItem,
  Divider,
  Window,
  WindowHeader,
  WindowContent
} from "react95";

const Login = props => {
  return (
    <div style={{ backgroundColor: "#208c71", height: "100vh" }}>
      <Window
        style={{
          top: "30%",
          left: "1%",
          height: "15rem",
          width: "42rem",
          border: "1px solid yellow"
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
            height: "80%",
            border: "1px solid red"
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
              flexDirection: "column",
              border: "1px solid red"
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
            className="login-window-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid yellow",
              width: "20%"
            }}
          >
            <Button>Ok</Button>
            <Button>Cancel</Button>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Login;
