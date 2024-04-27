import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/m1.png";
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container mx-auto overflow-hidden">
            <Slider {...settings}>
                <div className="">
                    <img src={img} alt="" className="w-full" />
                </div>
                <div className="">
                    <img src={img} alt="" className="w-full" />
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
