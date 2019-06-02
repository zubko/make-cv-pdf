import React from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";

import CV from "./cv/CV";
import registerFonts from "./cv/registerFonts";

registerFonts();

function App() {
  return (
    <PDFViewer className="pdf-viewer">
      <CV />
    </PDFViewer>
  );
}

export default App;
