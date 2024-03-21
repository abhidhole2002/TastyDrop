import React from "react";
import BgImg from "../../../public/images/home.jpg";

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
        className="bg-cover bg-center h-screen text-white flex flex-col items-left  rounded-3xl mt-8 p-2"
      >
        <div className=" flex my-auto flex-col items-start w-1/2 ml-10 p-4 ">
          <h1 className="text-6xl font-bold mb-16 ">
            Order your favourite food here
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aperiam qui esse enim non, cupiditate expedita magnam in modi id?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aperiam qui esse enim non, cupiditate expedita magnam in modi id?
          </p>
          <button className="mt-6 bg-white text-black py-2 px-6 rounded-3xl font-semibold">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
