import React from 'react'

const arrChoices = ["cake","woman","nude","beer","apple","orange"]
let target = arrChoices[getRandomInt(0,arrChoices.length-1)]




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

class ConditionGame extends React.Component {

  render () {
  if(this.props.state.answers==undefined) {
    return (
      <React.Fragment>
        <p>give me a picture of {target}</p>
      </React.Fragment>
    )
  }
  else {
    if(JSON.stringify(this.props.state.answers).includes(target)) {
      return (
        <React.Fragment>
          <p>thanks, nice {target}</p>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p>that doesn't look like {target}</p>
        </React.Fragment>
      )
    }
  }


  //   if(this.props.state.answerFood[0].name==target) {
  //     return (
  //     <React.Fragment>

  //     <p>thanks, nice {target}!!</p>

  //     </React.Fragment>
  //   )
  // }
  //   if(this.props.state.answerFood[0].name!=target) {
  //     return (
  //     <React.Fragment>

  //     <p>that doesn't look like {target}, try again!</p>

  //     </React.Fragment>
  //   )
  // }
  }
}

export default ConditionGame