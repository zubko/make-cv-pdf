/**
 * Meant to be called from Node.
 * Gets the Document component and config from the command line arg.
 * @flow
 */

type Result = {|
  Document: React.ComponentType<any>,
  fileName: string,
|};

const ArgumentName = "--document=";

export const getDocumentFromArgs = (): Result => {
  const docArgument = process.argv[2];
  if (!docArgument || docArgument.indexOf(ArgumentName) !== 0) {
    throw Error(
      `❌: The command should be called with --document=Name. Found: ${docArgument}`
    );
  }
  const docName = docArgument.substr(ArgumentName.length);
  let pathToDocument = getPathToDocument(docName);
  //$FlowFixMe - Flow doesn't like parametrized require
  const imported = require(pathToDocument);
  // console.log("doc", imported[docName], docName);
  return {
    Document: imported[docName],
    fileName: imported.fileName || docName,
  };
};

const getPathToDocument = (docName) => {
  try {
    return require.resolve(`../documents/${docName}`);
  } catch (_) {
    try {
      return require.resolve(`../documents/${docName}/${docName}`);
    } catch (_) {
      throw Error(
        `❌: Can't resolve either '../documents/${docName}' or '../documents/${docName}/${docName}'`
      );
    }
  }
};
