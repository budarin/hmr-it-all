import fs from "fs";
import path from "path";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "../common/App";

const app = express();

const prefix = process.env.NODE_ENV === "development" ? "./dist/" : "./";

try {
  console.log(
    "file length = " +
      fs.readFileSync(path.resolve(`${prefix}client/client.js`), "utf8").length
  );
} catch (error) {
  console.log(error);
}

app.get("/api", (req, res) => {
  res.send({ message: "I am a server route and can also be hot reloaded!" });
});

app.get("*", (req, res) => {
  let application = renderToString(<App />);

  let html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div>App</div>
            <br />
            <div id="root">${application}</div>
            <script src="/client.js"></script>
        </body>
    </html>`;

  res.send(html);
});

export default app;
