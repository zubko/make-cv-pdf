import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { CV } from "./documents/CV/CV";
import { registerFonts } from "./utils/registerFonts";

registerFonts();

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer>
      <CV />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById("root")
);
