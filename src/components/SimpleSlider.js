

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: true,
      focusOnSelect: true,
      centerMode: true,
      adaptiveHeight: true
      

    }

    let htmlInsert = this.props.imgURL.map((item, index) => {
      return(
        <div>
          <img className="sliderImage" src={item.imgUrl} alt="" />
        </div>
      );
    });
    


    return (

      

      <div className="sliderContainer">
        <Slider {...settings}>
          {htmlInsert} 
        </Slider>
      </div>
    );
  }
}