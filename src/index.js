import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>,
  rootElement
);
