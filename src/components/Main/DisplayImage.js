import React from "react";
// import LogoImage from "../Logo/Logo.png";
// import "./DisplayImage.css";

const LoadImage = ({ imageURL }) => {
  //   if (imageURL) {
  //     return (
  //       <React.Fragment>
  //           <img className="center ma absolute mt2 flex flex-wrap"
  //             id="inputImage"
  //             src={imageURL}
  //             alt="img"
  //             width="500px"
  //             height="auto"
  //           />
  //       </React.Fragment>
  //     );
  //   } else {
  //     return null;
  //   }
  // };
  if (imageURL) {
    return (
      <React.Fragment>

              <img src={imageURL} alt="logo" height="auto" width="500px" /> 
   
      </React.Fragment>
    );
  } else return null;
};

export default LoadImage;
