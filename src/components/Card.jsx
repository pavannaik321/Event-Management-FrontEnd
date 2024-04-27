import React from "react";
import { Link } from "react-router-dom";

const Card = ({ venueDetails }) => {
    return (
        <>
            <div className="bg-stone-800 text-stone-200 max-w-80  border rounded-2xl">
                <img
                    src={venueDetails.image}
                    alt=""
                    className="border rounded-t-2xl "
                />
                <div className="flex justify-between my-1 px-1">
                    <h1 className="">{venueDetails.title}</h1>
                    <div className="flex">
                        <h2>{venueDetails.capacity}</h2>
                        <p>{venueDetails.price}</p>
                    </div>
                </div>
                <p>{venueDetails.description}</p>

                <Link
                    to="./:id/venueDetail"
                    className="bg-stone-200 w-1/4 mx-auto mt-0 flex justify-center text-stone-900"
                >
                    View
                </Link>
            </div>
        </>
    );
};

export default Card;
