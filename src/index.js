// @flow

import React from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

import { Env } from "./utils/env";
import { registerFonts } from "./utils/registerFonts";

registerFonts();

if (Env.isNode) {
  const path = require("path");
  const fs = require("fs");
  const {
    Document,
    name,
  } = require("./utils/getDocumentFromArgs").getDocumentFromArgs();
  const buildPath = path.resolve(`./build`);
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath);
  }
  const fullPath = path.resolve(`${buildPath}/${name}.pdf`);
  console.log(`Saving '${name}' to`, fullPath);
  ReactPDF.render(<Document />, fullPath);
} else {
  const { App } = require("./App");
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.render(<App />, root);
  }
}
