import React from "react";
import DisplayImage from "./DisplayImage";

class URLBar extends React.Component {
  render() {
    return <React.Fragment>
      <div className="center pa3 ph5-ns">
          <input onDrop={this.props.onDrop} onChange={this.props.onInputChange} placeholder="paste image URL here" className="w-70 f4 link ph3 pv2 dib " type="text" />
          <button onClick={this.props.onLoadImage} className="w-30 f4 link ph3 pv2 dib white bg-light-purple">
            {" "}
            Load{" "}
          </button>
          <DisplayImage imageURL={this.props.imageURL} />
        </div>
        {/* <div className="center"> */}
        {/* </div> */}
      </React.Fragment>;
  }
}
export default URLBar;

// import React from "react";
// // import "./URLBar.css";

// const URLBar = ({ onInputChange, onLoadImage, imageURL }) => {
//   return (
//     <React.Fragment>
//       <div className="flex ">
//         <input
//           onChange={onInputChange}
//           placeholder="paste image URL here"
//           className="f4 pa2 w-70 center"
//           type="text"
//         />
//         <button
//           onClick={onLoadImage}
//           className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
//         >
//           Load Image
//     </button>
//       </div>
//       {/* <div className="flex-wrap center ">
//       <img className="center ma absolute mt2 flex flex-wrap block"
//         id="inputImage"
//         src={imageURL}
//         alt="img"
//         width="500px"
//         height="auto"
//       />
//         </div> */}
//     </React.Fragment>
//   );
// };

// export default URLBar;
