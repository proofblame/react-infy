import React, { Component } from "react";
import Slider from "react-slick";
import "../Slider/Slider.css";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
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
              this.props.prevPage()
            }}
          ></button>
          <button
            className="slider__button slider__button_next button"
            onClick={() => {
              this.next()
              this.props.nextPage()
            }}
          ></button>
        </div>
      </>
    );
  }
}
