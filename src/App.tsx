import React, { Component } from "react";

import DataExplorer from "@nteract/data-explorer";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "./nteract.css";

import iris from "./data/iris.json";

class App extends Component {
  onMetaDataChange = (metadata: { dx?: any }) => {
    if (metadata && metadata.dx) {
      console.log(metadata.dx);
    }
  };
  render() {
    return (
      <div className="App">
        <DataExplorer data={iris} onMetadataChange={this.onMetaDataChange} />
      </div>
    );
  }
}

export default App;
