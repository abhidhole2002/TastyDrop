import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menus from "../../components/MenuList/Menus";
import FoodDisplay from "../../components/FoodDisplay";
import Footer from "../../Footer/Footer";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Menus category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Footer />
    </div>
  );
};

export default Home;
