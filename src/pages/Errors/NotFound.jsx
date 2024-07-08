/* eslint-disable react/no-unescaped-entities */
// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Images
import ChestIMG from "../../assets/404chest.png";

// Icons
import {
    HomeIcon,
  } from "@heroicons/react/24/solid";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <img src={ChestIMG} className="w-80" />
        <span className="text-light-blue-600 font-retro text-2xl">
          Not Found
        </span>
        <h1 className="text-xl text-center p-4">
          The page you were looking for doesn't exist - or is in another castle.
        </h1>
        <a href="/">
            <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50">
            <HomeIcon className="size-5" />
                Return to Home
            </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
