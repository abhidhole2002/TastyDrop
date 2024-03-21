import React, { useContext } from "react";
import { StoreContext } from "./context/SroreContext";
import FoodCard from "./FoodCard";
import { BsEmojiFrownFill } from "react-icons/bs";

const FoodDisplay = ({ category }) => {
  const { food_data } = useContext(StoreContext);
  const filteredData = food_data.filter(
    (item, index, arr) => category === "All" || category === item.flag
  );

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold py-10">
        Top dishes near you
      </h1>
      {filteredData.length > 0 ? (
        <div
          className="grid grid-cols-4 grid-rows-5 mx-auto p-4"
          style={{ placeItems: "center" }}
        >
          {filteredData.map((item, index) => (
            <FoodCard
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              desc={item.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-center py-32 mb-5 text-3xl text-red-500 font-bold flex flex-col items-center ">
          Data is not available
          <BsEmojiFrownFill className="mt-10 text-8xl" />
        </p>
      )}
    </div>
  );
};

export default FoodDisplay;
