/**
 * Meant to be called from Node.
 * Gets the Document component and config from the command line arg.
 * @flow
 */

import * as React from "react";

type Result = {|
  Document: React.ComponentType<any>,
  buildPath: string,
  name: string
|};

const ARGUMENT_NAME = "--document=";

export default function getDocumentFromArgs(): Result {
  const docArgument = process.argv[2];
  if (!docArgument || docArgument.indexOf(ARGUMENT_NAME) !== 0) {
    throw Error(
      `The command should be called with --document=%%NAME%%. Found: ${docArgument}`
    );
  }
  const docName = docArgument.substr(ARGUMENT_NAME.length);
  const capitalizedDocName = docName[0].toUpperCase() + docName.substr(1);
  //$FlowFixMe - Flow doesn't like dynamic imports
  const imported = require(`../documents/${capitalizedDocName}`);
  return {
    Document: imported.default,
    buildPath: imported.buildPath,
    name: docName
  };
}
