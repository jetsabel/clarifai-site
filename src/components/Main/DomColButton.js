import React from "react";
// import './DomColButton.css'

const DomColButton = ({ answerDomCol, calcDomCol }) => {
  if (answerDomCol === undefined) {
    return (
      <button
        onClick={calcDomCol}
        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
      >
        Dominant Color
      </button>
    );
  }
  if (answerDomCol) {
    return (
      <React.Fragment>
      <button
         className="grow f4 link ph3 pv2 dib white "
         style={{ background: answerDomCol[0].raw_hex }}
      />
      <button
         className="grow f4 link ph3 pv2 dib white "
         style={{ background: answerDomCol[1].raw_hex }}
      />
      <button
         className="grow f4 link ph3 pv2 dib white "
         style={{ background: answerDomCol[2].raw_hex }}
      />
      <button
         className="grow f4 link ph3 pv2 dib white "
        //  className="w-{Math.abs(answerDomCol[3].value*10)*10}grow f4 link ph3 pv2 dib white "
         style={{ background: answerDomCol[3].raw_hex , width: answerDomCol[3].value}}
      />

      </React.Fragment>
    );
  }
};

export default DomColButton;

//   className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
// >
//   {answerDomCol[0].raw_hex}

// if (answerDomCol) {
//     return (
//       <button
//         className="w-30 grow f4 link ph3 pv2 dib white "
//         style={{ backGroundColor: answerDomCol[0].raw_hex }}
//       />
//     );
//   }
// };


// <button className="w-30 grow f4 link ph3 pv2 dib " >
//   <span
//     style={{ backGroundColor: answerDomCol[0].raw_hex }}
//   />00
//         <span
//     style={{ backGroundColor: answerDomCol[1].raw_hex }}
//   />00
//         <span
//     style={{ backGroundColor: answerDomCol[2].raw_hex }}
//   />00
//         <span
//     style={{ backGroundColor: answerDomCol[3].raw_hex }}
//   />00
//       </button>
