import React from "react";
import { Document } from "@react-pdf/renderer";

import { Page } from "../../components/Page";

import { Header } from "./components/Header";
import { CodeExamples } from "./components/CodeExamples";
import { Languages } from "./components/Languages";
import { SkillsGroup } from "./components/SkillsGroup";
import { ExperienceGroupPrimary } from "./components/ExperienceGroupPrimary";
import { ExperienceGroupSecondary } from "./components/ExperienceGroupSecondary";

export const IOS = () => (
  <Document author="Oleksandr Zubko" title="CV-Oleksandr-Zubko-iOS">
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

export const fileName = "CV-Oleksandr-Zubko-iOS";
