import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

const Hello = () => (
  <Document size="A4" title="Hello">
    <Page>
      <Text>Hello</Text>
    </Page>
  </Document>
);

export default Hello;
