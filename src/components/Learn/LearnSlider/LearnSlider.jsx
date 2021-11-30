import React, { Component } from "react";
import Slider from "react-slick";
// import "../Slider/Slider.css";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
    this.props.nextPage()
  }
  previous() {
    this.slider.slickPrev();
    this.props.prevPage()
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {/* <ul className="tree__popup-list"> */}
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.children}
        </Slider>
        {/* </ul> */}
        <div className="slider__header">
          <button
            className="slider__button button"
            onClick={() => {
              this.previous()

            }}
          ></button>
          <button
            className="slider__button slider__button_next button"
            onClick={() => {
              this.next()

            }}
          ></button>
        </div>
      </div>
    );
  }
}
