import React from 'react';


const DisplayState = (state) => {
  // var string = ''
//  state.forEach(key => string+=key)
  return (
    <div>
      <p>
        {/* {string} */}
        {
          JSON.stringify(state,null,100)
        }
      {/* state.hasRun_displayNSFW {state.hasRun_displayNSFW} */}
      </p>
    </div>
  )
  
}

export default DisplayState