/**
 * Meant to be called from Node.
 * Gets the Document component and config from the command line arg.
 * @flow
 */

import * as React from "react";

type Result = {|
  Document: React.ComponentType<any>,
  name: string,
|};

const ARGUMENT_NAME = "--document=";

export const getDocumentFromArgs = (): Result => {
  const docArgument = process.argv[2];
  if (!docArgument || docArgument.indexOf(ARGUMENT_NAME) !== 0) {
    throw Error(
      `The command should be called with --document=%%NAME%%. Found: ${docArgument}`
    );
  }
  const docName = docArgument.substr(ARGUMENT_NAME.length);
  //$FlowFixMe - Flow doesn't like parametrized require
  const imported = require(`../documents/${docName}`);
  return {
    Document: imported.Document,
    name: imported.name || docName,
  };
};
