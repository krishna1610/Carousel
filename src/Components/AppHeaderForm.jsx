import React from "react";

class AppHeaderForm extends React.Component {
  render() {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success" type="submit">
          {this.props.btnName}
        </button>
      </form>
    );
  }
}

export default AppHeaderForm;
