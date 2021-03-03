import React from "react";

class AppBodyPlaceholder extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <svg
          className="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 140x140"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">
            140x140
          </text>
        </svg>

        <h2>{this.props.placeholder.heading}</h2>
        <p>{this.props.placeholder.paraText}</p>
        <p>
          <a className="btn btn-secondary" href="#">
            {this.props.placeholder.btnText}
          </a>
        </p>
      </div>
    );
  }
}

export default AppBodyPlaceholder;
