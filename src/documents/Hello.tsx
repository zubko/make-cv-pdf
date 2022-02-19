import React from "react";
import { Document, Text } from "@react-pdf/renderer";

import { Page } from "../components/Page";

export const Hello = () => (
  <Document title="Hello">
    <Page size="A4">
      <Text>Hello</Text>
    </Page>
  </Document>
);
