import React from "react";
import { Document, Text } from "@react-pdf/renderer";

import { Page } from "../components/Page";

export const Hello = () => (
  <Document size="A4" title="Hello">
    <Page>
      <Text>Hello</Text>
    </Page>
  </Document>
);
