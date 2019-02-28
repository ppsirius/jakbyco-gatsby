import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { animation } from "../utils/AnimationVariable";
import { connect } from 'react-redux';

class SocialContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if(this.props.imageAnimationCompleted !== prevProps.imageAnimationCompleted) {
      this.animationInit()
    }
  }

  componentDidMount() {
    this.aniamtionSetup();
  }

  aniamtionSetup() {
    this.iconHeight = this.refs.iconTwitter.getBoundingClientRect().height + 5;
    this.icons = [
      this.refs.iconTwitter,
      this.refs.iconMail,
      this.refs.iconLinkedin,
      this.refs.iconGithub,
      this.refs.iconCodepen,
      this.refs.iconInstagram
    ];
    this.iconSeparatorWidth = this.refs.iconSeparator.getBoundingClientRect().width;

    TweenMax.set(this.refs.iconSeparator, { width: 0 });
    TweenMax.set(this.icons, { y: this.iconHeight });
  }

  animationInit() {
    TweenMax.to(this.refs.iconSeparator, animation.duration, {
      ease: animation.ease,
      width: "100%",
      onComplete: () => {
        TweenMax.staggerTo(
          this.icons,
          animation.duration,
          {
            y: animation.valueY,
            ease: animation.ease
          },
          animation.staggerTime
        );
      }
    });
  }

  render() {
    return (
      <div className="social-container">
        <div className="social-separator" ref="iconSeparator" />
        <div className="social">
          <a
            href="https://twitter.com/ppsirius"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconTwitter"
              className="social-icon icon-twitter"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.5 31.2"
            >
              <path
                fill="#FFF"
                d="M36.4.6c-1.5.9-3.1 1.6-4.9 1.9C30.1 1 28.1 0 25.9 0c-4.2 0-7.7 3.5-7.7 7.9 0 .6.1 1.2.2 1.8-6.4-.3-12-3.5-15.8-8.2-.7 1.2-1 2.5-1 4 0 2.7 1.4 5.1 3.4 6.6-1.3 0-2.4-.4-3.5-1v.1c0 3.8 2.6 7 6.2 7.7-.6.2-1.3.3-2 .3-.5 0-1 0-1.4-.1 1 3.1 3.8 5.4 7.2 5.5C8.9 26.7 5.6 28 2 28c-.6 0-1.2 0-1.8-.1 3.4 2.2 7.4 3.5 11.8 3.5 14.1 0 21.9-12 21.9-22.4V8c1.5-1.1 2.8-2.5 3.8-4.1-1.4.6-2.9 1.1-4.4 1.2C34.6 4 35.8 2.4 36.4.6z"
              />
            </svg>
          </a>
          <a
            href="mailto:piotrek@jakbyco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconMail"
              width="18"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFF"
                d="M9.732 8.485l4.95 4.242c-.18.168-.423.273-.69.273H2.008c-.268 0-.51-.103-.69-.27l4.95-4.245L8 10zM8 9L1.318 3.273c.18-.168.423-.273.69-.273h11.985c.268 0 .51.103.69.27zm7 3.186L10.167 8.08 15 3.874v8.31zm-14 0V3.878l4.833 4.2L1 12.187zm0 0"
              />
            </svg>
          </a>
          <a
            href="www.linkedin.com/in/piotr-pupczyk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconLinkedin"
              className="social-icon icon-linkedin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36.9 33.5"
            >
              <g fill="#FFF">
                <path d="M.9 10.8h7.2v22.8H.9zM27.8 10.5c-4.1 0-6.7 2.2-7.2 3.8v-3.6h-8.1c.1 1.9 0 22.8 0 22.8h8.1V21.2c0-.7 0-1.4.2-1.9.6-1.4 1.7-2.8 3.9-2.8 2.8 0 4.1 2.1 4.1 5.2v11.8H37V20.9c-.1-7.1-4.1-10.4-9.2-10.4zM4.4 0C1.7 0 0 1.7 0 4c0 2.2 1.7 3.9 4.3 3.9h.1c2.7 0 4.4-1.7 4.4-4C8.7 1.7 7 0 4.4 0z" />
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/ppsirius"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconGithub"
              className="social-icon icon-github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.6 34.5"
            >
              <path
                fill="#FFF"
                d="M27.4 14.5c.1-.8.2-1.7.2-2.7 0-4.3-2.1-5.8-2.4-6.5.6-3.2-.1-4.7-.4-5.2-1.2-.4-4 1.1-5.6 2.1-2.6-.7-8-.7-10 .2C5.4-.3 3.4.1 3.4.1s-1.3 2.3-.3 5.6C1.9 7.3.9 8.4.9 11.3c0 .7 0 1.4.1 2 1.1 5.6 5.5 8 9.8 8.4-.7.5-1.4 1.4-1.5 2.5-.8.5-2.5.7-3.8.3-1.7-.5-2.4-4-5.1-3.5-.6.1-.5.5 0 .8.8.5 1.6 1.2 2.2 2.6.5 1.1 1.4 3 4.5 3 1.2 0 2.1-.1 2.1-.1v3.9c0 1.2-1.7 1.6-1.7 2.2 0 .2.6.3 1 .3.9 0 2.7-.7 2.7-2v-5.1c0-1.3.7-1.7.7-1.7s.1 7.1-.2 8c-.3 1.1-.8 1-.8 1.4 0 .7 2.2.2 2.9-1.4.6-1.3.3-8.2.3-8.2h.6v4.6c0 1.5-.2 3.4.7 4.3.6.6 2.4 1.6 2.4.7 0-.5-1.3-1-1.3-2.5V25c.8 0 .9 2.2.9 2.2l.3 4.2s-.2 1.5 1.6 2.2c.6.2 2 .3 2.1-.1.1-.4-1.7-.9-1.7-2.1v-4.3c0-3.1-.4-4.3-1.9-5.2 4.4-.6 8.8-2.5 9.6-7.4z"
              />
            </svg>
          </a>
          <a
            href="https://codepen.io/ppsirius/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconCodepen"
              className="social-icon icon-codepen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35.9 36.9"
            >
              <path
                fill="#FFF"
                d="M19.2.5c-1-.7-2.3-.6-3.3 0L1.2 10.7c-.7.6-1.2 1.5-1.2 2.4v11c0 1 .5 1.9 1.3 2.4l14.9 9.9c1 .6 2.2.6 3.2 0l15.2-10c.8-.5 1.3-1.5 1.3-2.4V13.1c0-1-.5-1.9-1.3-2.4L19.2.5zm11.4 11.9L25 16.2l-5.3-3.8V4.9l10.9 7.5zM15.8 4.8v7.4L10.4 16 5 12.4l10.8-7.6zM3.5 16L7 18.3l-3.5 2.4V16zm12.4 15.7L5 24.4l5.4-3.8 5.4 3.7.1 7.4zm-2.1-13.4l3.5-2.5 4.1 2.7-3.6 2.4-4-2.6zm5.9 13.4v-7.4l5.2-3.5 5.6 3.7-10.8 7.2zm12.4-10.8l-3.7-2.4 3.7-2.5v4.9z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ppsirius"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-container"
          >
            <svg
              ref="iconInstagram"
              className="social-icon icon-instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36.7 36.7"
            >
              <path
                fill="#FFF"
                d="M32.3 0H4.4C2 0 0 1.9 0 4.3v28c0 2.4 2 4.3 4.4 4.3h27.9c2.4 0 4.4-1.9 4.4-4.3v-28c0-2.4-2-4.3-4.4-4.3zm-5.9 5.7c0-.6.5-1.1 1.1-1.1h3.4c.6 0 1.1.5 1.1 1.1v3.4c0 .6-.5 1.1-1.1 1.1h-3.4c-.6 0-1.1-.5-1.1-1.1V5.7zm-8 5.6c3.9 0 7.1 3.1 7.1 7s-3.2 7-7.1 7c-3.9 0-7-3.1-7-7-.1-3.8 3.1-7 7-7zm14.8 20.8c0 .6-.5 1.1-1.1 1.1H4.6c-.6 0-1.1-.5-1.1-1.1V14.9H8c-.6.9-.8 2.5-.8 3.5 0 6.1 5 11.1 11.2 11.1 6.2 0 11.2-5 11.2-11.1 0-1-.1-2.6-.9-3.5h4.6v17.2z"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.app

export default connect(mapStateToProps)(SocialContainer);
