import React from "react";
import { Document } from "@react-pdf/renderer";

import { Page } from "../../components/Page";

import { Header } from "./components/Header";
import { CodeExamples } from "./components/CodeExamples";
import { Languages } from "./components/Languages";
import { SkillsGroup } from "./components/SkillsGroup";
import { ExperienceGroupPrimary } from "./components/ExperienceGroupPrimary";
import { ExperienceGroupSecondary } from "./components/ExperienceGroupSecondary";

export const RN = () => (
  <Document author="Alexander Zubko" title="CV-Alexander-Zubko-RN-Mobile-Web">
    <Page size="A4">
      <Header />
      <SkillsGroup />
      <ExperienceGroupPrimary />
    </Page>
    <Page>
      <ExperienceGroupSecondary />
      <CodeExamples />
      <Languages />
    </Page>
  </Document>
);

export const fileName = "CV-Alexander-Zubko-Mobile-Web";
