import React from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";

import CV from "./components/CV";

function App() {
  return (
    <PDFViewer className="pdf-viewer">
      <CV />
    </PDFViewer>
  );
}

export default App;
