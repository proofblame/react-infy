
import Slider from "react-slick";
import Button from './Button';

import React, { useRef, useEffect } from 'react'

const LearnPopupSlider = ({ children, defSlide, handleClosePopup }) => {
  const customSlider = useRef();


  useEffect(() => {
    customSlider.current.slickGoTo(0, true)
  }, [defSlide])






  const NextButton = () => (
    <Button className='slider__button button learn__button' >

    </Button>
  )

  const PrevButton = () => (
    <Button className='slider__button slider__button_next button learn__button'>

    </Button>

  )


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,


  };
  const buttonGroup = {
    display: 'flex',
    columnGap: '5px',
    paddingTop: '35px'
  }

  const next = () => {
    customSlider.current.slickNext()
    console.log(543)
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }
  const reInit = () => {

  }


  return (
    <div>
      <Slider ref={slider => (customSlider.current = slider)} {...settings}>
        {children}
      </Slider>
      <div style={buttonGroup}>
        <Button className='slider__button button learn__button'
          onClick={previous}
        />
        <Button className='slider__button slider__button_next button learn__button'
          onClick={next}
        />

      </div>


    </div>
  )
}

export default LearnPopupSlider



// import '../Slider/Slider.css';

// export default class PreviousNextMethods extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.default = this.default.bind(this)

//   }
//   componentDidMount() {
//   }
//   componentDidUpdate() {

//   }
//   componentWillUnmount() {
//     this.slider.onReInit()
//   }
//   next() {
//     this.slider.slickNext();

//   }
//   previous() {
//     this.slider.slickPrev();

//   }
//   default() {
//     this.slider.onReInit()
//   }

//   render() {
//     const settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       initialSlide: 0,
//     };


//     const buttonGroup = {
//       display: 'flex',
//       columnGap: '5px',
//       paddingTop: '35px'
//     }
//     return (
//       <div>
//         <Slider ref={(c) => (this.slider = c)} {...settings}>
//           {this.props.children}
//         </Slider>
//         <div className="slider__header learn__slider">
//           <div style={buttonGroup}>
//             <button
//               className="slider__button button learn__button"
//               onClick={() => {
//                 this.previous();
//                 this.props.prevPage();
//               }}
//             ></button>
//             <button
//               className="slider__button slider__button_next button learn__button"
//               onClick={() => {
//                 this.next();
//                 this.props.nextPage();

//               }}
//             ></button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
