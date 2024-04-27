import React from "react";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    return (
        <Form
            method="post"
            action="/login"
            className="w-1/4 mx-auto my-2 p-8 flex flex-col bg-stone-800 text-stone-200 justify-between"
        >
            <div className="flex flex-col my-2">
                <label htmlFor="email">Email</label>
                <input type="email" value="" />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="password">Password</label>
                <input type="password" value="" />
            </div>

            <button
                className="border border-solid border-slate-100"
                type="submit"
            >
                Login
            </button>

            <Link className=" text-slate-100" to="/signup">
                Sign Up
            </Link>
        </Form>
    );
};

export default Login;
