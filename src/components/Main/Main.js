import React from "react";
import "../../index.css";
import Helpers from "./Helpers";
import URLBar from "./URLBar";
// import Rank from "./Rank";
import DisplayImage from "./DisplayImage";
import Clarifai from "clarifai";
import Dropzone from "react-dropzone";
import DefaultImage from "../Logo/Logo";
import ConditionGame from "./ConditionGame";

const app = new Clarifai.App({
  apiKey: "f43a1b9e565d4b5abec85b8a823bf2b5"
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  setInitialState = () => {
    this.setState({ answerFace: undefined });
    this.setState({ answerFaceNumber: undefined });
    this.setState({ answerNSFW: undefined });
  };

  onLoadImage = event => {
    this.setInitialState();
    this.setState({ imageURL: this.state.input });
    console.log("onLoadImage()");
    this.getRawData();
  };

  onDrop = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    var imageUrl = evt.dataTransfer.getData("URL");
    this.setState({ input: imageUrl });
  };
  getRawData = () => {
    let temp_answerGeneral,
      temp_answerNSFW,
      temp_answerFood,
      temp_answerDomCol,
      temp_answerFaces,
      temp_answerModeration;
    app.models.predict(Clarifai.NSFW_MODEL, this.state.input).then(
      function(response) {
        temp_answerNSFW = response.outputs[0].data.concepts[1].value * 100;
      },
      function(err) {
        // alert("error - valid image URL and web connection?");
      }
    );
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input).then(
      function(response) {
        temp_answerFood = response.outputs[0].data.concepts;
      },
      function(err) {
        // alert("error - valid image URL and web connection?");
      }
    );
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        temp_answerFaces = response.outputs[0].data.regions.length;
      },
      function(err) {
        // alert("error - valid image URL and web connection?");
      }
    );
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
        temp_answerDomCol = response.outputs[0].data.colors;
      },
      function(err) {
        // alert("error - valid image URL and web connection?");
      }
    );
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
        temp_answerGeneral = response.outputs[0].data.concepts;
      },
      function(err) {
        // alert("error - valid image URL and web connection?");
      }
    );
    app.models.predict(Clarifai.MODERATION_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
        temp_answerModeration = response.outputs[0].data.concepts;
      },
      function(err) {}
    );
    setTimeout(() => {
      let raw = {};
      raw.nSFW = temp_answerNSFW;
      raw.general = temp_answerGeneral;
      raw.moderation = temp_answerModeration;
      raw.colors = temp_answerDomCol;
      raw.faces = temp_answerFaces;
      raw.food = temp_answerFood;
      this.setState({ raw: raw });
      this.processData();
    }, 3000);
  };

  processData = () => {
    let thresholdGeneral = 0.95;
    let thresholdModeration = 0.95;
    let thresholdFood = 0.9;
    let thresholdDomCol = 0.33;
    let answers = {};
    if (this.state.raw.general)
      answers.general = this.state.raw.general.filter(
        element => element.value > thresholdGeneral
      );
    if (this.state.raw.moderation)
      answers.moderation = this.state.raw.moderation.filter(
        element => element.value > thresholdModeration
      );
    if (this.state.raw.colors)
      answers.colors = this.state.raw.colors.filter(
        element => element.value > thresholdDomCol
      );
    if (this.state.raw.faces) answers.faces = this.state.raw.faces;
    if (this.state.raw.food)
      answers.food = this.state.raw.food.filter(
        element => element.value > thresholdFood
      );
    this.setState({ answers: answers });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="center pa4 br3 shadow-5 bg-stripeypattern w-50">
          <URLBar
            onInputChange={this.onInputChange}
            imageURL={this.state.imageURL}
            onLoadImage={this.onLoadImage}
            onDrop={this.onDrop}
          />
        </div>
        <div className="center pa4 br3 shadow-5 w-50 bg-light-purple tc op-5">
          <ConditionGame state={this.state} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
