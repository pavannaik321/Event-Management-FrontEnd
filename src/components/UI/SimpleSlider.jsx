// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style1.css"; 

import img from "../../assets/m1.png";
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="main-div">

        <div className="container mx-auto h-4/6 w-4/6">
            <Slider {...settings}>
                <div className=" w-4/6">
                    <img src={img} alt="" className=" w-full " />
                </div>
                <div className="w-4/6">
                    <img src={img} alt="" className="w-full" />
                </div>
                <div className="w-4/6">
                    <img src={img} alt="" className="w-full" />
                </div>
            </Slider>
        </div>

        <div className="" >
            
        </div>


        </div>        
    );
}

export default SimpleSlider;