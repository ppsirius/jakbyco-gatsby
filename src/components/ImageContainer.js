import React, { Component } from "react";
import Logo from "./Logo";
import Image from "./Image";
import SocialContainer from "./SocialContainer";
import Raven from 'raven-js';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    Raven.configureScope((scope) => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Raven.captureException(error);
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
