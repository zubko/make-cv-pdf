import React from "react";
import { Document } from "@react-pdf/renderer";

import StyledPage from "../../components/StyledPage";
import Header from "../../components/Header";
import CodeExamples from "../../components/CodeExamples";
import Languages from "../../components/Languages";
import Skills from "./Skills";
import Experience from "./Experience";

const CV = () => (
  <Document size="A4" title="CV-Alexander-Zubko-iOS-Android-ReactNative">
    <StyledPage>
      <Header title="Mobile And Web Apps Developer" />
      <Skills />
      <Experience />
      <CodeExamples />
      <Languages />
    </StyledPage>
  </Document>
);

export default CV;
