import React from "react";
import { Document } from "@react-pdf/renderer";

import StyledPage from "../../components/StyledPage";

import Header from "./components/Header";
import CodeExamples from "./components/CodeExamples";
import Languages from "./components/Languages";
import SkillsGroup from "./components/SkillsGroup";
import ExperienceGroup from "./components/ExperienceGroup";

const CV = () => (
  <Document size="A4" title="CV-Alexander-Zubko-RN-Mobile-Web">
    <StyledPage>
      <Header />
      <SkillsGroup />
      <ExperienceGroup />
      <CodeExamples />
      <Languages />
    </StyledPage>
  </Document>
);

export default CV;
