// @flow
import importAll from "import-all.macro";

const modules = {
  ...importAll.sync("../documents/*/index.js"),
  ...importAll.sync("../documents/*.js")
};
const paths = Object.keys(modules).sort();

export function getNameFromPath(path: string): string {
  if (path.match(/index.js$/)) {
    return path.split("/")[2];
  } else {
    return path.split("/")[2].split(".")[0];
  }
}

export function getRouteFromPath(path: string): string {
  return `/${getNameFromPath(path).toLowerCase()}`;
}

export function getAllDocumentsPaths(): string[] {
  return paths;
}

export function getAllDocuments(): { [string]: Function } {
  return modules;
}
