import React from "react";
import { Document } from "@react-pdf/renderer";

import StyledPage from "../../components/StyledPage";
import Header from "../../components/Header";
import Goal from "../../components/Goal";
import CodeExamples from "../../components/CodeExamples";
import Skills from "./Skills";
import Experience from "./Experience";

const CV = () => (
  <Document size="A4" title="CV-Alexander-Zubko-iOS-Android-ReactNative">
    <StyledPage>
      <Header title="Mobile And Web Apps Developer" />
      <Goal>
        Develop great front end experiences.
      </Goal>
      <Skills />
      <Experience />
      <CodeExamples />
    </StyledPage>
  </Document>
);

export default CV;
