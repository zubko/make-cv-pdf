import React from "react";
import "./App.css";
import { PDFViewer, Font } from "@react-pdf/renderer";
import CV from "./cv/CV";

Font.register({
  family: "Title",
  fonts: [
    {
      fontWeight: "light",
      src: "http://localhost:8000/fonts/WorkSans-Light.ttf"
    },
    {
      fontWeight: "normal",
      src: "http://localhost:8000/fonts/WorkSans-Regular.ttf"
    },
    {
      fontWeight: "medium",
      src: "http://localhost:8000/fonts/WorkSans-Medium.ttf"
    },
    {
      fontWeight: "semibold",
      src: "http://localhost:8000/fonts/WorkSans-SemiBold.ttf"
    },
    { fontWeight: "bold", src: "http://localhost:8000/fonts/WorkSans-Bold.ttf" }
  ]
});
Font.register({
  family: "Content",
  fonts: [
    {
      fontWeight: "normal",
      src: "http://localhost:8000/fonts/QuattrocentoSans-Regular.ttf"
    },
    {
      fontWeight: "bold",
      src: "http://localhost:8000/fonts/QuattrocentoSans-Bold.ttf"
    }
  ]
});

function App() {
  return (
    <PDFViewer className="pdf-viewer">
      <CV />
    </PDFViewer>
  );
}

export default App;
