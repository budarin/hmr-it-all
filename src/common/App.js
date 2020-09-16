import React from "react";
import { hot } from "react-hot-loader/root";
import Title from "./Title";

const App = () => (
  <>
    <Title />
    <div>Hello from React!</div>
  </>
);

export default hot(App);
