import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-center ">
            {/* Icon */}
            <div className="flex justify-between min-w-min">
                <Link to="" className="bg-stone-200 P-4 text-stone-900">
                    SignUp
                </Link>
                <Link to="login" className="bg-stone-200 P-4 text-stone-900">
                    Login
                </Link>
            </div>
        </header>
    );
};

export default Header;
