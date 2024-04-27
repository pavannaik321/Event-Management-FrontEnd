import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import img from "../assets/m1.png";
const HomePage = () => {
    const details = {
        image: img,
        title: "JK Mahal",
        description: "A Very Big Hall",
        capacity: 400,
        price: 400000,
    };
    return (
        <>
            <div className="flex">
                <Card venueDetails={details}></Card>
                <Card venueDetails={details}></Card>
            </div>
        </>
    );
};

export default HomePage;
