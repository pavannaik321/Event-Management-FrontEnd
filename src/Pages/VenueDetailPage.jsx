// import React from "react";
import SimpleSlider from "../components/UI/SimpleSlider.jsx";
import FoodSlider from "../components/UI/FoodSlider.jsx";
import PhotoSlider from "../components/UI/PhotoSlider.jsx";


import "../style1.css"; 


const VenueDetailPage = () => {
    // return <SimpleSlider></SimpleSlider>;
    return(
    <div>
            <div>
                <SimpleSlider /> {/* Render the first carousel component */}
            </div>
            <div>
                <h2 id="foodh2">Food</h2>
                <FoodSlider /> {/* Render the second carousel component */}
            </div>
            <div>
                <h2 id="foodh2">Photography</h2>
                <PhotoSlider /> {/* Render the second carousel component */}
            </div>
        </div>
    )
};

export default VenueDetailPage;
