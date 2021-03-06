// @flow

import React from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

import env from "./utils/env";
import registerFonts from "./utils/registerFonts";

registerFonts();

if (env.isNode) {
  const path = require("path");
  const fs = require("fs");
  const getDocumentFromArgs = require("./utils/getDocumentFromArgs").default;
  const { Document, name } = getDocumentFromArgs();
  const buildPath = path.resolve(`./build`);
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath);
  }
  const fullPath = path.resolve(`${buildPath}/${name}.pdf`);
  console.log(`Saving '${name}' to`, fullPath);
  ReactPDF.render(<Document />, fullPath);
} else {
  const App = require("./App").default;
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.render(<App />, root);
  }
}
