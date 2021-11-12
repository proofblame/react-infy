import React, { Component } from "react";
import Slider from "react-slick";
import '../Slider/Slider.css';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);;
  }
  componentDidMount() {
    // if (this.props.page >= 0) {
    //   this.props.getTansactions()
    //   this.props.setPage(this.props.page)
    // } else {
    //   return
    // }
  }
  next() {
    this.slider.slickNext();
   
    // if (this.props.page >= 0) {
    //   this.props.setPage(this.props.page + 1)
    //   this.props.getTansactions()
    // } else {
    //   return
    // }
  }
  previous() {
    this.slider.slickPrev();
    
    // if (this.props.page > 0) {
    //   this.props.setPage(this.props.page - 1)
    //   this.props.getTansactions()
    // } else {
    //   return
    // }
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
          <button
            className="slider__button button" onClick={
            () => {
              this.previous();
              this.props.prevPage()
            }
            }></button>
          <button
            className="slider__button slider__button_next button" onClick={
              () => {
                this.next();
                this.props.nextPage()
            }}></button>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}