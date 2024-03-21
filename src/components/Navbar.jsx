import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className=" w-full">
      <div className="flex justify-between items-center py-2 ">
        <div className="px-2">
          <assets.GiFoodTruck className=" text-5xl cursor-pointer" />
        </div>
        <ul className="flex text-lg gap-10 px-2">
          <li
            onClick={() => setMenu("Home")}
            className={
              menu === "Home" ? "underline cursor-pointer" : "cursor-pointer"
            }
          >
            Home
          </li>
          <li
            onClick={() => setMenu("About")}
            className={
              menu === "About" ? "underline cursor-pointer" : "cursor-pointer"
            }
          >
            About
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={
              menu === "Menu" ? "underline cursor-pointer" : "cursor-pointer"
            }
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Contact Us")}
            className={
              menu === "Contact Us"
                ? "underline cursor-pointer"
                : "cursor-pointer"
            }
          >
            Contact us
          </li>
        </ul>
        <div className="flex gap-7 px-2 items-center">
          <div>
            <assets.IoSearch className="text-2xl cursor-pointer" />
          </div>
          <div>
            <assets.FaShoppingBag className="text-2xl cursor-pointer" />
          </div>
          <div className="bg-white py-2 px-7 text-sm border border-black rounded-3xl hover:bg-black hover:text-white font-semibold">
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
