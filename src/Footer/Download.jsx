import React from "react";
import { assets } from "../assets/assets";

const Download = () => {
  return (
    <div className=" text-center flex flex-col items-center mb-5 p-4">
      <h1  className="text-3xl font-semibold mb-5">
        For Better Experience download <br />
        App
      </h1>
      <div>
        <img src={assets.apple_google} alt="" className="w-96 h-24" />
      </div>
    </div>
  );
};

export default Download;
