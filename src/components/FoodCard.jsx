import React, { useContext, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { StoreContext } from "./context/SroreContext";
import { FiMinus } from "react-icons/fi";

const FoodCard = ({ id, name, price, img, desc }) => {
  // const [count, SetCount] = useState(0);
  const { items, setItems, AddToCart, RemoveFromCart } =
    useContext(StoreContext);
  return (
    <div className="bg-gray-100 mb-5 flex flex-col text-center items-center p-5 w-64 rounded-md">
      <img src={img} alt="" className="h-56 w-56 rounded-sm mb-2" />
      <div className="flex w-52 items-center justify-between mb-3">
        <h1 className="font-bold">{name}</h1>
        {!items[id] ? (
          <div className="bg-white p-2 rounded-full border border-gray-400 cursor-pointer">
            <IoAddOutline
              className="font-bold text-lg  "
              onClick={() => AddToCart(id)}
            />
          </div>
        ) : (
          <div className="flex bg-white items-center py-1 px-2 gap-2 border border-gray-200 rounded-xl">
            <div className="bg-red-300 p-1 rounded-full cursor-pointer text-white ">
              <FiMinus onClick={() => RemoveFromCart(id)}  className="text-red-900 "/>
            </div>
            <p>{items[id]}</p>
            <div className="bg-green-300 p-1 rounded-full cursor-pointer  ">
              <IoAddOutline onClick={() => AddToCart(id)}  className="text-green-900 "/>
            </div>
          </div>
        )}
      </div>
      <p>{desc}</p>
      <h1 className="bg-black text-white rounded-md py-1 px-2 mb-4 mt-4">
        ${price}
      </h1>
      <button className="bg-white py-1 px-4 border-2 border-black rounded-md">
        Order Now
      </button>
    </div>
  );
};

export default FoodCard;
