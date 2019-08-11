// @flow

import * as React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WebCV from "./documents/Web";
import MobileCV from "./documents/Mobile";
import Home from "./Home";

import "./App.css";

function wrappedInViewer<Props: {}>(Component): React.AbstractComponent<Props> {
  return () => (
    <PDFViewer className="pdf-viewer">
      <Component />
    </PDFViewer>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/web" component={wrappedInViewer(WebCV)} />
        <Route exact path="/mobile" component={wrappedInViewer(MobileCV)} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
