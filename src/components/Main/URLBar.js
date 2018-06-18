import React from "react";
import DisplayImage from "./DisplayImage";

class URLBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="center pa3 ph5-ns">
          <input
            onDrop={this.props.onDrop}
            onChange={this.props.onInputChange}
            placeholder="drop image tag here"
            className="w-70 f4 link ph3 pv2 dib "
            type="text"
          />
          <button
            onClick={this.props.onLoadImage}
            className="w-30 f4 link ph3 pv2 dib white bg-light-purple"
          >
            {" "}
            Load{" "}
          </button>
          <DisplayImage imageURL={this.props.imageURL} />
        </div>
        {/* <div className="center"> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default URLBar;
