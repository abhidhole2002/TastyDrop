import React from "react";
import { Menu_list } from "../../assets/assets";
import MenuCard from "./MenuCard";

const Menus = ({ category, setCategory }) => {
  return (
    <div className="mt-10 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-5">Explore our menu</h1>
        <p className="mb-4 w-1/2 mx-auto text-lg text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          illum repellendus harum tenetur et maxime cupiditate ex esse
          temporibus asperiores.
        </p>
        <h1>{category}</h1>
      </div>
      <div className="flex gap-4 justify-between">
        {Menu_list.map((item, index) => {
          return (
            <MenuCard
              key={index}
              menu={item.name}
              imgs={item.img}
              category={category}
              onClick={() =>
                setCategory((prev) => (prev === item.name ? "All" : item.name))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menus;
