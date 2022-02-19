import React from "react";
import { PDFViewer, Document, Page, View } from "@react-pdf/renderer";

export const wrappedInPDFViewer = (Story, isDocumentStory) => (
  <PDFViewer style={{ position: "fixed", width: "100%", height: "100%" }}>
    {isDocumentStory ? <Story /> : wrappedInDocument(Story)}
  </PDFViewer>
);

const wrappedInDocument = (Story) => (
  <Document size="A4" title="Preview">
    <Page>
      <Story />
    </Page>
  </Document>
);
