import React, { Component } from "react";

import DataExplorer from "@nteract/data-explorer";
import "./App.css";

import iris from "./data/iris.json";

iris.data = iris.data.filter(d => d.index <= 10);

class App extends Component {
  onMetaDataChange = (metadata: object) => {
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
