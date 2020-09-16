import React from "react";

const Title = () => <h1>Header</h1>;

export default Title;

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}
