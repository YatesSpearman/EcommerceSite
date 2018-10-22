

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  
  

  buildSlider() {
      for(var i=0; i < this.props.imgURL.length; i++) {
        
        var html = {};
        html += <div><img className="sliderImage" src={this.props.imgURL[i].imgUrl} alt="" /></div>;
        console.log(html)
        
      }
      return html;
  }

  
    
  
  
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
    

   
    
    var htmlInfo = this.buildSlider();
    
    

    
    
    
    
    

    return (

      

      <div className="sliderContainer">
        <Slider {...settings}>
          {/* {htmlInfo}  */}
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/683381/pexels-photo-683381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/682016/pexels-photo-682016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/67603/pexels-photo-67603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/724889/pexels-photo-724889.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/569172/pexels-photo-569172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          </div>
          <div>
            <img className="sliderImage" src="https://c1.staticflickr.com/3/2748/4057975918_56a85d09df_o.jpg" alt=""/>
          </div>
          
        </Slider>
      </div>
    );
  }
}