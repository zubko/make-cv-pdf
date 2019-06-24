import React from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";

import env from "./utils/env";
import registerFonts from "./utils/registerFonts";

registerFonts();

if (env.isNode) {
  const CV = require("./components/CV").default;
  ReactPDF.render(
    <CV />,
    `${__dirname}/../../zubko.io/static/CV-Alexander-Zubko-iOS-Android-ReactNative.pdf`
  );
} else {
  const App = require("./App").default;
  ReactDOM.render(<App />, document.getElementById("root"));
}
