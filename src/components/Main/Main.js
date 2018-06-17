import React from "react";
import "../../index.css";
import Helpers from './Helpers'
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
      // input: "",
      // // imageURL: 'https://i.ebayimg.com/images/g/3y8AAOSwuMZZAqcE/s-l300.jpg',
      // // input: 'https://i.ebayimg.com/images/g/3y8AAOSwuMZZAqcE/s-l300.jpg',
      // // answerFace: undefined,
      // answerFaceNumber: undefined,
      // answerDomCol: undefined,
      // answerNSFW: undefined,
      // onLoadImage: undefined,
      // onInputChange: undefined
    };
  }

  setInitialState = () => {
    this.setState({ answerFace: undefined });
    this.setState({ answerFaceNumber: undefined });
    this.setState({ answerNSFW: undefined });
  };

  onLoadImage = event => {
    // console.log('onLoadImage()',event)
    this.setInitialState();
    this.setState({ imageURL: this.state.input });
    console.log("onLoadImage()");
    this.getRawData();
  };

  getRawData = () => {
    // console.log("getRawData()",this.state.input);
    let temp_answerGeneral, temp_answerNSFW, temp_answerFood, temp_answerDomCol, temp_answerFaces, temp_answerModeration
    app.models
      .predict(
        Clarifai.NSFW_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          temp_answerNSFW = response.outputs[0].data.concepts[1].value * 100;
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
    app.models
      .predict(
        Clarifai.FOOD_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          temp_answerFood = response.outputs[0].data.concepts
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          temp_answerFaces = response.outputs[0].data.regions.length;
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          console.log(response)
          temp_answerDomCol = response.outputs[0].data.colors;
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
    app.models
      .predict(
        Clarifai.GENERAL_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          console.log(response)
          temp_answerGeneral = response.outputs[0].data.concepts
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
    app.models
      .predict(
        Clarifai.MODERATION_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          console.log(response)
          temp_answerModeration = response.outputs[0].data.concepts
        },
        function(err) { alert("error - valid image URL and web connection?"); }
      );
          setTimeout(() => {
        this.setState({ answerNSFW: temp_answerNSFW });
        this.setState({ answerGeneral: temp_answerGeneral });
        this.setState({ answerModeration: temp_answerModeration });
        this.setState({ answerDomCol: temp_answerDomCol });
        this.setState({ answerFaces: temp_answerFaces });
        this.setState({ answerFood: temp_answerFood });
      }, 3000);
  };

  //   calcNSFW = () => {
  //     let nsfw = undefined;
  //     app.models.predict(Clarifai.NSFW_MODEL, this.state.input).then(
  //       function(response) {
  //         nsfw = response.outputs[0].data.concepts[1].value * 100;
  //       },
  //       function(err) {
  //         alert("error - valid image URL and web connection?");
  //       }
  //     );
  //     //TODO dirty hack with timeout until i can understand promises async etc
  //     setTimeout(() => {
  //       this.setState({ answerNSFW: nsfw });
  //     }, 3000);
  //   };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        {/* <div className="form center pa4 br3 shadow-5 bg-stripeypattern w-50"> */}
        <div className="center pa4 br3 shadow-5 bg-stripeypattern w-50">
          <URLBar
            onInputChange={this.onInputChange}
            imageURL={this.state.imageURL}
            onLoadImage={this.onLoadImage}
          />
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
