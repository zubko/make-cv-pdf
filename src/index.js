import React from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

import env from "./utils/env";
import registerFonts from "./utils/registerFonts";

registerFonts();

if (env.isNode) {
  const path = require("path");
  const CV = require("./components/CV").default;
  const fullPath = path.resolve(process.argv[2]);
  console.log("Saving to", fullPath);
  ReactPDF.render(<CV />, fullPath);
} else {
  const App = require("./App").default;
  ReactDOM.render(<App />, document.getElementById("root"));
}
