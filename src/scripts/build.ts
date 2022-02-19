import React from "react";
import ReactPDF from "@react-pdf/renderer";
import path from "path";
import fs from "fs";

import { registerFonts } from "../utils/registerFonts";
import { getDocumentFromArgs } from "../utils/getDocumentFromArgs";

registerFonts();

const { Document, fileName } = getDocumentFromArgs();
const buildPath = path.resolve(`./build`);
if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}
const fullPath = path.resolve(`${buildPath}/${fileName}.pdf`);
console.log(`📄 Saving '${fileName}' to`, fullPath);
ReactPDF.render(React.createElement(Document), fullPath);
