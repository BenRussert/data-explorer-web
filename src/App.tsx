import React, { Component } from "react";
import "./App.css";

import DataExplorer from "@nteract/data-explorer";
import iris from "./data/iris.json";

function onMetaDataChange(metadata: object) {
  console.log(metadata);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataExplorer data={iris} onMetadataChange={onMetaDataChange} />
      </div>
    );
  }
}

export default App;
