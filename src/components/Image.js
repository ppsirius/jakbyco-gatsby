import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { animation } from "../utils/AnimationVariable";
import { connect } from 'react-redux';
import { imageAnimationCompleted as imageAnimationCompletedAction } from '../state/app';
import ImageLarge from '../images/image-large.jpg'
import ImageMedium from '../images/image-medium.jpg'
import ImageSmall from '../images/image-small.jpg'
class Image extends Component {
  constructor(props) {
    super(props)

    this.image = React.createRef();
  };

  imageLoaded = () => {
    this.animateOverlay();
  };

  componentDidMount() {
  // SSR hack for onLoad
  const img = this.image.current;
    if (img && img.complete) {
      this.imageLoaded();
    }
  }

  animateOverlay = () => {
    console.log('animate overlay')
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
          src={ImageSmall}
          srcSet={`${ImageLarge} 1920w, ${ImageMedium} 960w, ${ImageSmall} 400w`}
          sizes="(min-width: 1025px) 50vw, 100vw"
          alt="Waterfall in Norway"
          ref={this.image}
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