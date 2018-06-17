import React from "react";
// import './FaceButton.css'

const FaceButton = ({ calcFaceNumber, answerFaceNumber }) => {
  // console.log("faceBitton", answerFaceNumber, calcFaceNumber);
  if (answerFaceNumber === undefined) {
    return (
      <button
        onClick={calcFaceNumber}
        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
      >
        Detect Face
      </button>
    );
  }
  if (answerFaceNumber === 0) {
    return (
      <button className="w-30 grow f4 link ph3 pv2 dib bg-dark-grey">
        No Faces
      </button>
    );
  }
  if (answerFaceNumber === 1) {
    return (
      <button className="w-30 grow f4 link ph3 pv2 dib bg-dark-grey">
        One Face
      </button>
    );
  }
  if (answerFaceNumber > 1) {
    return (
      <button className="w-30 grow f4 link ph3 pv2 dib bg-dark-grey">
        {answerFaceNumber} Faces
      </button>
    );
  }
};

export default FaceButton;
