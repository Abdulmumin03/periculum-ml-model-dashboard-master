import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globals";
import "./index.css";
const theme = {
  colors: {
    primary: "#083A9A",
    secondary: "#0548C9;",
    white: "#ffffff",
    lightBlack: "#8F9CA8;",
    lightBlue: "#4C92FB;",
    gray: "#F3F5F9;",
  },
  screens: {
    mobile: "600px",
    tablet: "900px",
  },
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
