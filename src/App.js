// @flow

import * as React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  getAllDocuments,
  getAllDocumentsPaths,
  getRouteFromPath
} from "./utils/documentsComponents";
import Home from "./Home";

import "./App.css";

function wrappedInViewer<Props: {}>(Component): React.AbstractComponent<Props> {
  return () => (
    <PDFViewer className="pdf-viewer">
      <Component />
    </PDFViewer>
  );
}

let documents = getAllDocuments();
const paths = getAllDocumentsPaths();
documents = paths.reduce(
  (obj, path) => ({ ...obj, [path]: wrappedInViewer(documents[path].default) }),
  {}
);

function App() {
  return (
    <Router>
      <Switch>
        {paths.map(path => (
          <Route
            key={path}
            exact
            path={getRouteFromPath(path)}
            component={documents[path]}
          />
        ))}
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
