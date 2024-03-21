import React from "react";

const MenuCard = ({ menu, imgs, category, onClick }) => {
  return (
    <div
      className={` mt-2 w-24 flex flex-col items-center py-1 cursor-pointer rounded-xl`}
      onClick={onClick}
    >
      <div>
        <img
          src={imgs}
          alt=""
          className={`h-16 w-16 rounded-full border mt-2  ${
            category === menu ? "border-4 border-orange-500" : ""
          }`}
        />
      </div>
      <h1>{menu}</h1>
    </div>
  );
};

export default MenuCard;
