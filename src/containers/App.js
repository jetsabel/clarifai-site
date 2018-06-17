
import React, { Component } from "react";
// import "./App.css";
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Main from "../components/Main/Main";
import Particles from "react-particles-js";
import Logo from "../components/Logo/Logo";
// import DisplayState from "../components/Main/DisplayState";

const ParticlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      isSignedIn: true
    };
  }

  // componentDidMount
  //set state in here instead of constructior
  // }



  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {/* <Particles className="particles" params={ParticlesOptions} /> */}
        {/* <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} /> */}
        {this.state.route === "home" ? (
          <div>
            {/* <Logo /> */}
            {/* <Rank /> */}
            {/* <DisplayState state={this.state}/> */}
            <Main />
            {/* <FaceRecognition box={this.state.box} image={this.state.image}/> */}
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
