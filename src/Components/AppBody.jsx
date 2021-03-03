import React from "react";
import AppBodyInformation from "./AppBodyInformation";
import AppBodyIntro from "./AppBodyIntro";

class AppBody extends React.Component {
  render() {
    return (
      <main>
        <AppBodyIntro />
        <AppBodyInformation />
      </main>
    );
  }
}

export default AppBody;
