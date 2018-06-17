import React from "react";
// import './NSFWButton.css'

const NSFWButton = ({ answerNSFW, calcNSFW }) => {
  if (answerNSFW === undefined) {
    return (
      <button
        onClick={calcNSFW}
        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
      >
        Detect NSFW%
      </button>
    );
  } else {
    return (
      <button className="w-30 grow f4 link ph3 pv2 dib bg-dark-grey">
        {Math.round(answerNSFW)}% NSFW
      </button>
    );
  }
};

export default NSFWButton;
