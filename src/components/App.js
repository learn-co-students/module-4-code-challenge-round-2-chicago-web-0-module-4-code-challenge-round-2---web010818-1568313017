import React, { Component } from "react";
import AccountContainer from "./AccountContainer";

import "../stylesheets/App.css";

class App extends Component {
  // purely done for enjoyment
  customStyle = {
    fontSize: 0.25 + "em"
  };

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>
            The Royal {/*<span style={this.customStyle}>with cheese</span> */}
            Bank of Flatiron
          </h2>
        </div>

        <AccountContainer />
      </div>
    );
  }
}

export default App;
