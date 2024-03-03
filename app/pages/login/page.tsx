"use client";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="w-screen mt-28 flex flex-col items-center">
        <div className="shadow-lg shadow-slate-600 rounded-lg w-1/3 bg-gradient-to-t from-emerald-700 to-emerald-400 p-4">
          <div className="font-bold text-3xl">
            <h1 className="mb-4">Sign In!</h1>
            <hr></hr>
          </div>
          <div className="my-4">
            <p>
              <i>Book your exams!</i>
            </p>
          </div>
          <div className="w-full">
            <form className="flex flex-col">
              <div>
                <div className="flex flex-col">
                  <label className="mb-2">Username:</label>
                  <input
                    className="text-black px-1 py-2 rounded-md"
                    type="text"
                    placeholder="Type your username..."
                  ></input>
                </div>
                <div className="mt-4 flex flex-col">
                  <label className="mb-2">Password:</label>
                  <input
                    className="text-black px-1 py-2 rounded-md"
                    type="password"
                    placeholder="Type your password..."
                  ></input>
                </div>
              </div>
              <div className="mt-4 w-full">
                <button className="w-full rounded-md font-bold px-4 py-2 bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
                  Sign in
                </button>
              </div>
              <div className="my-4">
                <Link className="text-emerald-100" href="/forgotPassword">
                  Forgot your password?
                </Link>
              </div>
            </form>
          </div>
          <div>
            <Link className="text-emerald-100" href="/register">
              New to Clinica Odontológica?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
