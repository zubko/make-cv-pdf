import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { IOS } from "./documents/IOS/IOS";
import { registerFonts } from "./utils/registerFonts";

registerFonts();

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer>
      <IOS />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById("root")
);
