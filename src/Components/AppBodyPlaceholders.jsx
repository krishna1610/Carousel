import React from "react";
import AppBodyPlaceholder from "./AppBodyPlaceholder";

class AppBodyPlaceholders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholders: [
        {
          heading: "Heading",
          paraText:
            "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
          btnText: "View details »",
        },
        {
          heading: "Heading",
          paraText:
            "Another exciting bit of representative placeholder content. This time, we've moved on to the second column.",
          btnText: "View details »",
        },
        {
          heading: "Heading",
          paraText:
            "And lastly this, the third column of representative placeholder content.",
          btnText: "View details »",
        },
      ],
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.placeholders.map((placeholder) => {
          return <AppBodyPlaceholder placeholder={placeholder} />;
        })}
      </div>
    );
  }
}

export default AppBodyPlaceholders;
