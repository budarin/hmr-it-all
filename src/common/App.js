import React from "react";
import Title from "./Title";

const App = () => (
  <>
    <Title />
    <div>Hello from React!</div>
  </>
);

const isDevClient =
  process.env.BUILD_TARGET === "client" &&
  process.env.NODE_ENV === "development";

export default isDevClient ? require("react-hot-loader/root").hot(App) : App;
