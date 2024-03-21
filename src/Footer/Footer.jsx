import React from "react";
import { assets } from "../assets/assets";
import Download from "./Download";

const Footer = () => {
  return (
    <>
      <Download />

      <div className="bg-gray-900">
        <div className="bg-gray-900 text-gray-500 flex flex-row justify-around">
          <div className="py-6">
            <assets.GiFoodTruck className=" text-5xl cursor-pointer text-white" />
            <p className="w-96 mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              sapiente corporis facere deserunt dolore quis recusandae
              dignissimos mollitia tempora error molestiae minima, laboriosam
              ratione? Fugit placeat consectetur beatae quasi. Ullam!
            </p>
            <div className="flex  gap-4 py-4">
              <div className=" cursor-pointer  p-2 rounded-full border border-gray-500">
                <assets.FaFacebook className="text-2xl hover:text-blue-700 " />
              </div>
              <div className=" cursor-pointer  p-2 rounded-full border border-gray-500">
                <assets.FaTwitterSquare className="text-2xl hover:text-blue-700 " />
              </div>
              <div className=" cursor-pointer  p-2 rounded-full border border-gray-500">
                <assets.FaSquareYoutube className="text-2xl hover:text-red-700 hover:bg-white" />
              </div>
              <div className="cursor-pointer   p-2 rounded-full border border-gray-500">
                <assets.FaLinkedin className="text-2xl hover:text-blue-700 " />
              </div>
            </div>
          </div>

          <div className="py-8 ">
            <h1 className="text-xl font-bold text-white">COMPANY</h1>
            <ul>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Delivery</li>
              <li className="cursor-pointer">Privacy policy</li>
            </ul>
          </div>

          <div className="py-8">
            <h1 className="text-xl font-bold text-white">GET IN TOUCH</h1>
            <h1>+16745675672</h1>
            <h1>contact@gmail.com</h1>
          </div>
        </div>

        <div className="px-5">
          <hr className="text-gray-400" />
        </div>

        <div className="text-center  text-white mb-">
          <h1 className="py-3 text-sm">
            Copyright 2024 ©. All Rights Reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
