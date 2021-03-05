import React from "react";
import AppBodyContent from "./AppBodyContent";
import AppBodyPlaceholders from "./AppBodyPlaceholders";

class AppBodyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          divtextClassName: "col-md-7",
          divImgClassName: "col-md-5",
          heading: "First featurette heading.",
          mutedText: "It’ll blow your mind.",
          paraText:
            "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
        },
        {
          divtextClassName: "col-md-7 order-md-2",
          divImgClassName: "col-md-5 order-md-1",
          heading: "Oh yeah, it’s that good.",
          mutedText: "See for yourself.",
          paraText:
            "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
        },
        {
          divtextClassName: "col-md-7",
          divImgClassName: "col-md-5",
          heading: "And lastly, this one.",
          mutedText: "Checkmate.",
          paraText:
            "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container marketing">
        <AppBodyPlaceholders />
        <hr className="featurette-divider"></hr>
        {this.state.contents.map((content) => {
          return (
            <>
              <AppBodyContent content={content} />
              <hr className="featurette-divider"></hr>
            </>
          );
        })}
      </div>
    );
  }
}

export default AppBodyInformation;
