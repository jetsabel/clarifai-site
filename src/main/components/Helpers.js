// import React from 'react'

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


//   calculateFaceLocation = data => {
//     const clarifaiFace = data;
//     console.log(clarifaiFace);
//     const image = document.getElementById("inputImage");
//     const width = Number(image.width);
//     const height = Number(image.height);
//     return {
//       leftCol: clarifaiFace.left_col * width,
//       topRow: clarifaiFace.top_row * height,
//       rightCol: width - clarifaiFace.right_col * width,
//       bottomRow: height - clarifaiFace.bottom_row * height
//     };
//   };

//   calcDomCol = () => {
//     // console.log("CalcDomCol()");
//     let domCol = undefined;
//     app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
//       function(response) {
//         // console.log(response);
//         domCol = response.outputs[0].data.colors;
//       },
//       function(err) {
//         alert("error - valid image URL and web connection?");
//       }
//     );
//     //TODO dirty hack with timeout until i can understand promises async etc
//     setTimeout(() => {
//       //NOTE below is realated to face bounding box drawing
//       // if(faces>0)box = this.calculateFaceLocation(data)
//       // this.setState({answerFace: box})
//       this.setState({ answerDomCol: domCol });
//       // console.log(this.state.answerDomCol);
//     }, 3000);
//   };

//   calcFaceNumber = () => {
//     let faces = undefined;
//     // let box = undefined;
//     // let data = undefined;
//     app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
//       function(response) {
//         faces = 0;
//         if (response.outputs[0].data.regions.length > 0) {
//           faces = response.outputs[0].data.regions.length;
//         }
//       },
//       function(err) {
//         alert("error - valid image URL and web connection?");
//       }
//     );
//     //TODO dirty hack with timeout until i can understand promises async etc
//     setTimeout(() => {
//       //NOTE below is realated to face bounding box drawing
//       // if(faces>0)box = this.calculateFaceLocation(data)
//       // this.setState({answerFace: box})
//       this.setState({ answerFaceNumber: faces });
//     }, 3000);
//   };


//   export default Helpers