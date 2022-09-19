import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { connect } from 'react-redux';
import { TweenMax } from 'gsap';
import { animation } from '../utils/AnimationVariable';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollDownIsShowed: false,
    };

    // Gatsby SSR hack
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', () => this.hideScroll());
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.imageAnimationCompleted !== prevProps.imageAnimationCompleted
    ) {
      this.animationInit();
    }
  }

  componentDidMount() {
    this.animationSetup();
  }

  animationSetup = () => {
    // Motto elements
    this.mottoHeight = this.refs.motto1.getBoundingClientRect().height;
    this.mottoElements = [this.refs.motto1, this.refs.motto2];

    // Separator
    this.separtatorWidth = this.refs.aboutSeparator.getBoundingClientRect().width;

    // Text
    this.textHeight = this.refs.text1.getBoundingClientRect().height;
    this.textElements = [
      this.refs.text1,
      this.refs.text2,
      this.refs.text3,
      this.refs.text4,
    ];

    // Places
    this.placeHeight = this.refs.place1.getBoundingClientRect().height;
    this.placeElements = [this.refs.place1, this.refs.place2, this.refs.place3];

    //Scroll down
    this.scrollDownHeight = this.refs.scrollDown.getBoundingClientRect().height;

    // Setup hide elements
    TweenMax.set(this.refs.about, { opacity: 1 });
    TweenMax.set(this.mottoElements, { y: this.mottoHeight });
    TweenMax.set(this.refs.aboutSeparator, { width: 0 });
    TweenMax.set(this.textElements, { y: this.textHeight });
    TweenMax.set(this.placeElements, { y: this.placeHeight });

    //Scroll Down
    TweenMax.set(this.refs.scrollDownIcon, { y: this.scrollDownHeight });
  };

  animationInit = () => {
    // About content animate
    TweenMax.staggerTo(
      this.mottoElements,
      animation.duration,
      {
        y: animation.valueY,
        ease: animation.ease,
        onComplete: () => {
          TweenMax.to(this.refs.aboutSeparator, animation.duration, {
            width: '100%',
            ease: animation.ease,
            onComplete: () => {
              TweenMax.staggerTo(
                this.textElements,
                animation.duration,
                {
                  y: animation.valueY,
                  ease: animation.ease,
                  onComplete: () => {
                    TweenMax.staggerTo(
                      this.placeElements,
                      animation.duration,
                      {
                        y: animation.valueY,
                        ease: animation.ease,
                      },
                      animation.staggerTime
                    );
                  },
                },
                animation.staggerTime
              );
            },
          });
        },
      },
      animation.staggerTime
    );

    // Scroll down button
    if (!this.state.scrollDownIsShowed) {
      setTimeout(() => {
        TweenMax.to(this.refs.scrollDownIcon, animation.duration, {
          y: animation.valueY,
          onComplete: () => {
            setTimeout(() => {
              this.refs.scrollDown.classList.add('animate');
            }, 300);
          },
        });
      }, 3000);
    }
  };

  hideScroll = () => {
    this.setState({ scrollDownIsShowed: true });

    if (this.state.scrollDownIsShowed) {
      TweenMax.to(this.refs.scrollDownIcon, animation.duration, {
        y: this.scrollDownHeight + 10,
        onComplete: () => {
          this.setState({ scrollDownIsShowed: false });
        },
      });
    }
  };

  render() {
    return (
      <div className="about" style={{ opacity: 0 }} ref="about">
        <div className="about-container">
          <h1 className="headline about-header">
            <div className="hidden-text-container">
              <span className="hidden-text" ref="motto1">
                {this.props.motto.text1}
              </span>
              <br />
            </div>
            <div className="hidden-text-container">
              <span className="hidden-text" ref="motto2">
                {this.props.motto.text2}
              </span>
            </div>
          </h1>
          <div className="about-separator" ref="aboutSeparator" />
          <div className="about-content">
            <div className="hidden-text-container">
              <span className="hidden-text" ref="text1">
                {this.props.description.text1}
              </span>
              <br />
            </div>
            <div className="hidden-text-container">
              <span className="hidden-text" ref="text2">
                {this.props.description.text2}
              </span>
              <br />
            </div>
            <div className="hidden-text-container">
              <span className="hidden-text" ref="text3">
                {this.props.description.text3}
              </span>
            </div>
            <div className="hidden-text-container">
              <span className="hidden-text" ref="text4">
                {this.props.description.text4}
              </span>
            </div>
          </div>
          <div className="about-info">
            <ul className="about-info-list">
              <li className="about-info-element">
                <div className="hidden-text-container">
                  <div className="hidden-text" ref="place1">
                    <svg
                      className="about-info-icon marker"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 386.7 512"
                    >
                      <g>
                        <path d="M193.5 512c-7.7 0-14.9-3.8-19.2-10L43.7 314.4C15.5 280.6 0 237.4 0 192.6 0 86.4 86.8 0 193.4 0s193.3 86.4 193.3 192.6c0 32.6-8.4 64.9-24.3 93.5-.6 1.5-1.4 2.9-2.3 4.3-5.2 8.4-10.1 15.4-15.3 21.9l-132 189.6c-4.4 6.3-11.6 10.1-19.3 10.1zm-.1-490.9c-95 0-172.3 76.9-172.3 171.5 0 40 13.9 78.5 39 108.6.2.2.4.5.6.7l130.9 188c.4.6 1.2 1 1.9 1 .8 0 1.5-.4 2-1l132.3-190c.1-.2.3-.4.4-.6 4.8-6 9.3-12.4 14.2-20.3.1-.2.2-.4.3-.5.1-.1.1-.2.2-.3.2-.6.5-1.2.8-1.8 14.4-25.6 22-54.5 22-83.8 0-94.6-77.3-171.5-172.3-171.5z" />
                        <path d="M190.2 300.6c-59.8 0-108.4-48.5-108.4-108 0-59.6 48.6-108 108.4-108s108.4 48.5 108.4 108-48.6 108-108.4 108zm0-194.9c-48.2 0-87.3 39-87.3 86.9s39.2 86.9 87.3 86.9c48.2 0 87.3-39 87.3-86.9s-39.1-86.9-87.3-86.9z" />
                      </g>
                    </svg>
                    <span className="about-info-place">
                      {this.props.places.live}
                    </span>
                  </div>
                </div>
              </li>
              <li className="about-info-element">
                <div className="hidden-text-container">
                  <div className="hidden-text" ref="place2">
                    <svg
                      className="about-info-icon source-code"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M361.9 401.4c-2.8 0-5.5-1.1-7.6-3.2-4-4.2-3.9-10.9.3-14.9l139.6-134.9c4.2-4 10.9-3.9 14.9.3s3.9 10.9-.3 14.9L369.2 398.5c-2.1 1.9-4.7 2.9-7.3 2.9z" />
                        <path d="M501.5 266.5c-2.6 0-5.3-1-7.3-3L354.5 128.7c-4.2-4-4.3-10.7-.3-14.9 4-4.2 10.7-4.3 14.9-.3l139.6 134.9c4.2 4 4.3 10.7.3 14.9-2 2.2-4.8 3.2-7.5 3.2zM150.1 401.4c-2.6 0-5.3-1-7.3-3L3.2 263.6c-4.2-4-4.3-10.7-.3-14.9 4-4.2 10.7-4.3 14.9-.3l139.6 134.9c4.2 4 4.3 10.7.3 14.9-2.1 2.2-4.8 3.2-7.6 3.2z" />
                        <path d="M10.5 266.5c-2.8 0-5.5-1.1-7.6-3.2-4-4.2-3.9-10.9.3-14.9l139.6-134.9c4.2-4 10.9-3.9 14.9.3s3.9 10.9-.3 14.9L17.9 263.6c-2.1 2-4.7 2.9-7.4 2.9zM205.8 446.1c-.9 0-1.9-.1-2.8-.4-5.6-1.6-8.9-7.4-7.3-13L296 73.6c1.6-5.6 7.4-8.9 13-7.3 5.6 1.6 8.9 7.4 7.3 13L216 438.4c-1.3 4.7-5.6 7.7-10.2 7.7z" />
                      </g>
                    </svg>
                    <span className="about-info-place">
                      {this.props.places.work}
                    </span>
                  </div>
                </div>
              </li>
              <li className="about-info-element">
                <div className="hidden-text-container">
                  <div className="hidden-text" ref="place3">
                    <svg
                      className="about-info-icon boxing"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <g>
                        <path d="M27.594 0C20.91 0 16.62.797 13.874 3.03c-2.745 2.236-3.562 5.76-3.562 10.47 0 .133.06.53.063.688-2.168-.387-4.395.414-5.813 2.218-1.68 2.137-2.187 5.524-.593 9.563 2.444 6.417 5.132 9.87 7.655 11.843 1.227.957 2.406 1.55 3.438 1.968.332 2.06.636 3.802.968 5.157.353 1.43.638 2.418 1.376 3.157v.03c.852.79 2.06 1.235 3.782 1.5 1.722.267 4.042.376 7.312.376 3.28 0 5.7-.152 7.47-.5 1.75-.344 3.003-.898 3.593-2.03h.03c.005-.01-.003-.025 0-.032.856-1.602 1.087-4.094 1.25-6.376.16-2.207.157-4.02.157-4.156 1.395-2.3 2.246-5.55 2.875-9.187C44.675 23.077 45 17.85 45 13.5c0-4.715-.855-8.238-3.625-10.47C38.605.8 34.277 0 27.595 0zm0 2c6.515 0 10.398.875 12.53 2.594C42.26 6.312 43 9.016 43 13.5c0 4.25-.32 9.39-1.094 13.875-.773 4.484-2.117 8.305-3.625 9.813-.237.238-1.573.847-3.343 1.218-1.77.37-3.976.62-6.218.782-2.243.16-4.54.218-6.407.156-1.868-.063-3.403-.293-3.844-.47-1.564-.612-3.415-.952-5.595-2.655-2.18-1.704-4.676-4.786-7.03-10.97v-.03c-1.407-3.56-.892-6.107.28-7.595 1.12-1.426 2.836-1.87 4.47-1.313.128 1.454.178 2.676.436 4.5.42 2.965.86 5.74 1.44 7.157.108.366.413.635.788.702.375.062.754-.09.98-.4.223-.307.25-.717.075-1.053-.32-.782-.903-3.78-1.313-6.69-.41-2.91-.688-5.94-.688-7.03 0-4.488.708-7.223 2.813-8.938C17.23 2.849 21.078 2 27.595 2zm11.312 37.22c-.023.557-.015 1.065-.062 1.718-.16 2.207-.598 4.792-1.032 5.593v.032c-.12.24-.69.668-2.218.97-1.528.3-3.875.468-7.094.468-3.23 0-5.473-.11-7-.344-1.504-.23-2.238-.562-2.688-.968l-.03-.032c-.075-.086-.493-.89-.813-2.187-.247-1.01-.47-2.38-.72-3.907.152.05.34.105.47.156 1.057.42 2.573.557 4.53.624 1.957.066 4.285.008 6.594-.157 2.308-.164 4.593-.445 6.5-.843 1.43-.297 2.644-.59 3.562-1.125z" />
                      </g>
                    </svg>
                    <a
                      className="about-info-place"
                      href={this.props.places.hobbyLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {this.props.places.hobby}
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="scroll-down" ref="scrollDown">
          <svg
            className="scroll-down-icon"
            ref="scrollDownIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="566.3 185.4 239.4 381.3"
          >
            <g
              fill="none"
              stroke="#334455"
              strokeWidth="12"
              strokeMiterlimit="10"
            >
              <path d="M670.8 287.7c0 5.3-.1 10.6 0 16 .2 9.1 6.5 15.7 15 15.8 8.7.1 15.3-6.5 15.4-15.8.1-10.4.1-20.8 0-31.2-.1-9.1-6.5-15.7-15-15.8-8.7-.1-15.2 6.6-15.4 15.8-.1 5.1 0 10.1 0 15.2z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M703.4 560.7h-34.7c-53 0-96.4-44.4-96.4-97.4V288.8c0-53 43.4-97.4 96.4-97.4h34.7c53 0 96.4 44.4 96.4 97.4v174.5c0 53-43.4 97.4-96.4 97.4z"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  description: PropTypes.object.isRequired,
  motto: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state.app;

const ConnectedAbout = connect(mapStateToProps)(About);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDescriptionJson {
          edges {
            node {
              text1
              text2
              text3
              text4
            }
          }
        }
        allMottoJson {
          edges {
            node {
              text1
              text2
            }
          }
        }
        allPlacesJson {
          edges {
            node {
              live
              work
              hobby
              hobbyLink
            }
          }
        }
      }
    `}
    render={(data) => (
      <ConnectedAbout
        description={data.allDescriptionJson.edges[0].node}
        motto={data.allMottoJson.edges[0].node}
        places={data.allPlacesJson.edges[0].node}
      />
    )}
  />
);
