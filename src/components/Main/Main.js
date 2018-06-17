import React from "react";
import "../../index.css";
import URLBar from "./URLBar";
// import Rank from "./Rank";
import DisplayImage from "./DisplayImage";
// import FaceRecognition from "./FaceRecognition";
import Clarifai from "clarifai";
import DefaultImage from '../Logo/Logo'
const app = new Clarifai.App({
  apiKey: "f43a1b9e565d4b5abec85b8a823bf2b5"
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      // input: 'https://i.ebayimg.com/images/g/3y8AAOSwuMZZAqcE/s-l300.jpg',
      answerFace: undefined,
      answerFaceNumber: undefined,
      answerDomCol: undefined,
      answerNSFW: undefined,
      onLoadImage: undefined,
      onInputChange: undefined
    };
  }

  onLoadImage = event => {
    console.log("onLoadImage()", event.target.value);
    this.setState({ answerFace: undefined });
    this.setState({ answerFaceNumber: undefined });
    this.setState({ answerNSFW: undefined });
    this.setState({ imageURL: this.state.input });
  };

  calcNSFW = () => {
    let nsfw = undefined;
    app.models.predict(Clarifai.NSFW_MODEL, this.state.input).then(
      function(response) {
        nsfw = response.outputs[0].data.concepts[1].value * 100;
      },
      function(err) {
        alert("error - valid image URL and web connection?");
      }
    );
    //TODO dirty hack with timeout until i can understand promises async etc
    setTimeout(() => {
      this.setState({ answerNSFW: nsfw });
    }, 3000);
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data;
    console.log(clarifaiFace);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  calcDomCol = () => {
    // console.log("CalcDomCol()");
    let domCol = undefined;
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
      function(response) {
        // console.log(response);
        domCol = response.outputs[0].data.colors;
      },
      function(err) {
        alert("error - valid image URL and web connection?");
      }
    );
    //TODO dirty hack with timeout until i can understand promises async etc
    setTimeout(() => {
      //NOTE below is realated to face bounding box drawing
      // if(faces>0)box = this.calculateFaceLocation(data)
      // this.setState({answerFace: box})
      this.setState({ answerDomCol: domCol });
      // console.log(this.state.answerDomCol);
    }, 3000);
  };

  calcFaceNumber = () => {
    let faces = undefined;
    // let box = undefined;
    // let data = undefined;
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        faces = 0;
        if (response.outputs[0].data.regions.length > 0) {
          faces = response.outputs[0].data.regions.length;
        }
      },
      function(err) {
        alert("error - valid image URL and web connection?");
      }
    );
    //TODO dirty hack with timeout until i can understand promises async etc
    setTimeout(() => {
      //NOTE below is realated to face bounding box drawing
      // if(faces>0)box = this.calculateFaceLocation(data)
      // this.setState({answerFace: box})
      this.setState({ answerFaceNumber: faces });
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        {/* <div className="form center pa4 br3 shadow-5 bg-stripeypattern w-50"> */}
        <div className="center pa4 br3 shadow-5 bg-stripeypattern w-50">
          <URLBar onInputChange={this.onInputChange} imageURL={this.state.imageURL} onLoadImage={this.onLoadImage} />
        </div>
        {/* <div className="center pa4 br3 shadow-5 bg-stripeypattern w-50"> */}
          {/* <DisplayImage imageURL={this.props.imageURL} /> */}
              {/* <img src={this.state.imageURL||DefaultImage} alt="logo" height="auto" width="500px" />  */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Main;
