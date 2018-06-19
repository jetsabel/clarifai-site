//imports
import React, { Component } from "react";
import Main from "./main/Main";
import "tachyons";

class App extends Component {
  //constructor `c
  constructor() {
    super();
    this.state = {};
  }

  // lifeCycleMethods `l
  // componentDidMount
  //set state in here instead of constructior
  // }

  // methods `m

  //render `r
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
