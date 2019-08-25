import React from "react";
import { Route } from "react-router-dom";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";

import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return (
    <>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        {/* <Navigation /> */}
        <div>
          <Route
            path="/register"
            render={props => {
              return <Register {...props} />;
            }}
          />
          <Route
            path="/login"
            render={props => {
              return <Login {...props} />;
            }}
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
