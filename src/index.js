import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/Style/Style.css";
import { Provider } from "react-redux";
import { store } from "./JS-Redux/Store/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Footer className="footer"></Footer>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
