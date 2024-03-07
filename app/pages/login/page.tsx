"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const onChangeUserInfo = (event: any) => {
    const { name, value } = event.target;

    setUserInfo((currentInfo) => {
      return {
        ...currentInfo,
        [name]: value,
      };
    });
  };

  const handleSignIn = () => {
    // to do api call for sign in
  };

  return (
    <>
      <div className="w-screen my-16 flex flex-col items-center">
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
                    value={userInfo.username}
                    name="username"
                    onChange={onChangeUserInfo}
                    className="text-black px-1 py-2 rounded-md"
                    type="text"
                    placeholder="Type your username..."
                  ></input>
                </div>
                <div className="mt-4 flex flex-col">
                  <label className="mb-2">Password:</label>
                  <input
                    value={userInfo.password}
                    name="password"
                    onChange={onChangeUserInfo}
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
