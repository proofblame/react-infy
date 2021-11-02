import React, { Component } from "react";
import Slider from "react-slick";
import '../Slider/Slider.css';

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
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="slider__header">
          <h2 className="slider__title slider__title_main-page title">Infinity Blockchain</h2>
          <button
            className="slider__button button" onClick={this.previous}></button>
          <h2 className="slider__title title">Infinity Blockchain</h2>
          <button
            className="slider__button slider__button_next button" onClick={this.next}></button>
        </div>
        <div className="main__list">
          <ul className="list">
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.props.children}
            </Slider>
          </ul>
        </div>
      </div>
    );
  }
}