import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { saveState } from "./redux/persistState";

store.subscribe(() => {
  saveState(store.getState());
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Verdana",
      textTransform: "none",
      color: "#0b3360",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
