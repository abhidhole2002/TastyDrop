import { createContext, useEffect, useState } from "react";
import { food_data } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [items, setItems] = useState({});

  const AddToCart = (itemId) => {
    if (!items[itemId]) {
      setItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const RemoveFromCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = {
    food_data,
    items,
    setItems,
    AddToCart,
    RemoveFromCart,
  };
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
