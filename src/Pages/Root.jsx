import React from "react";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    );
};

export default Root;
