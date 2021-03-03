import React from "react";

class AppBodyContent extends React.Component {
  render() {
    return (
      <div className="row featurette">
        <div className={this.props.content.divtextClassName}>
          <h2 className="featurette-heading">
            {this.props.content.heading}{" "}
            <span className="text-muted">{this.props.content.mutedText}</span>
          </h2>
          <p className="lead">{this.props.content.paraText}</p>
        </div>
        <div className={this.props.content.divImgClassName}>
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
    );
  }
}

export default AppBodyContent;
