import React from "react";
import { Document } from "@react-pdf/renderer";

import { Page } from "../../components/Page";

import { Languages } from "../CV/components/Languages";

import { Header } from "./components/Header";
import { CodeExamples } from "./components/CodeExamples";
import { SkillsGroup } from "./components/SkillsGroup";
import { ExperienceGroupPrimary } from "./components/ExperienceGroupPrimary";
import { ExperienceGroupSecondary } from "./components/ExperienceGroupSecondary";

export const RN = () => (
  <Document author="Oleksandr Zubko" title="CV-Oleksandr-Zubko-Mobile-Web">
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

export const fileName = "CV-Oleksandr-Zubko-Mobile-Web";
