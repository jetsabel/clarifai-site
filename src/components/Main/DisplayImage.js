import React from "react";
import LogoImage from "../Logo/Logo.png";
import "./DisplayImage.css";

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
        <div className="ma4 mt0 center">
            <div className="Tilt-inner pa4">
              {" "}
              <img
                src={imageURL}
                alt="logo"
                height="auto"
                width="500px"
              />{" "}
            </div>
        </div>
      </React.Fragment>
    );
  } else return null;
};

export default LoadImage;
