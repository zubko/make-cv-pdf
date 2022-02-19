import { registerFonts } from "../src/utils/registerFonts";
import { wrappedInPDFViewer } from "./pdfViewerDecorator";

import "./preview.css";

registerFonts();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story, context) =>
    wrappedInPDFViewer(Story, context.parameters.isDocumentStory),
];
