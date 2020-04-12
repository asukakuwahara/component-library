import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TernaryButton } from "./components/buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <React.Fragment>
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Hey Yo</SecondaryButton>
    <TernaryButton disabled>Mhhhh</TernaryButton>
    <GlobalStyle />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector("#root"));
