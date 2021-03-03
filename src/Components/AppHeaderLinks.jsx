import React from "react";
import AppHeaderLink from "./AppHeaderLink";

class AppHeaderLinks extends React.Component {
  render() {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <AppHeaderLink text="Home" status="active" />
        <AppHeaderLink text="Link" />
        <AppHeaderLink text="Disabled" status="disabled" />
      </ul>
    );
  }
}

export default AppHeaderLinks;
