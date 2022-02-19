// @flow

import React from "react";
import ReactPDF from "@react-pdf/renderer";
import path from "path";
import fs from "fs";

import { registerFonts } from "../utils/registerFonts";

registerFonts();

const {
  Document,
  fileName,
} = require("../utils/getDocumentFromArgs").getDocumentFromArgs();
const buildPath = path.resolve(`./build`);
if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}
const fullPath = path.resolve(`${buildPath}/${fileName}.pdf`);
console.log(`Saving '${fileName}' to`, fullPath);
ReactPDF.render(<Document />, fullPath);
