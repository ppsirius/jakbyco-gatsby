import React, { Component } from "react";
import Logo from "./Logo";
import Image from "./Image";
import SocialContainer from "./SocialContainer";

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // logErrorToMyService(error, info);
  }

  render() {
    return (
      <div className="image-container">
        <Image />
        <Logo />
        <SocialContainer />
      </div>
    );
  }
};

export default ImageContainer;
