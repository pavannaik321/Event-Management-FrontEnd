// 

import Slider from "react-slick";
import img from "../../assets/images.jpg";

// import { baseUrl } from "./config";

import "../../style1.css"; 

function PhotoSlider() {
  const settings = {
    PhotoSlider: function() {
      return (
        <a>
          <img src={`img.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="food_content">
          {/* <img src={baseUrl + "/abstract01.jpg"} /> */}
          <img src={img} />
          <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>

        <div className="food_content">
        <img src={img} />
        <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>

        <div className="food_content">
         <img src={img} />
         <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>

        <div className="food_content">
        <img src={img} />
        <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>
        <div className="food_content">
        <img src={img} />
        <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>
        <div className="food_content">
         <img src={img} />
         <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>
        <div className="food_content">
        <img src={img} />
        <p className="desc_content">
            ASDFGHJKLQWERTYUIZXCVB
          </p>
          <p className="rate">
            200/-
          </p>
          <button onClick={this}>Add to Cart</button>
        </div>
      </Slider>
    </div>
  );
}
     

export default PhotoSlider;