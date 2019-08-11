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
      <Header title="Mobile Apps Developer with Web and Node.js skills" />
      <Goal>
        Develop great mobile apps and products as a part of a great team.
      </Goal>
      <Skills />
      <Experience />
      <CodeExamples />
    </StyledPage>
  </Document>
);

export default CV;
