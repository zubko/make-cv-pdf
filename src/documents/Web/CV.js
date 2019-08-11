import React from "react";
import { Document } from "@react-pdf/renderer";

import StyledPage from "../../components/StyledPage";
import Header from "../../components/Header";
import Goal from "../../components/Goal";
import Skills from "./Skills";
import Experience from "./Experience";
import CodeExamples from "../../components/CodeExamples";

const CV = () => (
  <Document size="A4" title="CV-Alexander-Zubko-Web-React">
    <StyledPage>
      <Header title="Web Apps Developer with Mobile and Node.js skills" />
      <Goal>Develop great apps and products as a part of a great team.</Goal>
      <Skills />
      <Experience />
      <CodeExamples />
    </StyledPage>
  </Document>
);

export default CV;
