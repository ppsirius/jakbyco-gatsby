import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { animation } from "../utils/AnimationVariable";
import { connect } from 'react-redux';
import { imageAnimationCompleted as imageAnimationCompletedAction } from '../state/app';
// import "../css/Image.css";

class Image extends Component {
  animateOverlay = () => {
    TweenMax.to(this.refs.imageLine, 1, {
      y: "100%",
      delay: 0.3,
      ease: animation.ease,
      onComplete: () =>
        TweenMax.to(this.refs.imageRect, 1.5, {
          x: "-100%",
          ease: animation.ease,
          onComplete: () => {
            this.props.imageAnimationCompleted()
          }
        })
    });
  };

  render() {
    return (
      <div className="image">
        <img
          src="/images/image-small.jpg"
          srcSet="/images/image-large.jpg 1920w, /images/image-medium.jpg 960w, /images/image-small.jpg 400w"
          sizes="(min-width: 1025px) 50vw, 100vw"
          alt="Waterfall in Norway"
          onLoad={this.animateOverlay}
        />
        <div className="image-overlay image-line" ref="imageLine" />
        <div className="image-overlay image-rect" ref="imageRect" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  imageAnimationCompleted: () => dispatch(imageAnimationCompletedAction())
})

export default connect(
  null,
  mapDispatchToProps
)(Image);