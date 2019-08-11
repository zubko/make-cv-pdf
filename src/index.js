// @flow

import React from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

import env from "./utils/env";
import registerFonts from "./utils/registerFonts";

registerFonts();

if (env.isNode) {
  const path = require("path");
  const getDocumentFromArgs = require("./utils/getDocumentFromArgs").default;
  const { Document, buildPath, name } = getDocumentFromArgs();
  const fullPath = path.resolve(buildPath);
  console.log(`Saving '${name}' to`, fullPath);
  ReactPDF.render(<Document />, fullPath);
} else {
  const App = require("./App").default;
  ReactDOM.render(<App />, document.getElementById("root"));
}
