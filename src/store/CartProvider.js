import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      // Find the index of the item with the provided id
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      
      if (itemIndex === -1) {
        // If item not found, return previous items as is
        return prevItems;
      }
      
      // Copy the item at that index
      const updatedItems = [...prevItems];
      const updatedItem = { ...updatedItems[itemIndex] };
  
      // Decrease the quantity by 1
      updatedItem.quantity--;
  
      // If quantity becomes 0, remove the entire item
      if (updatedItem.quantity === 0) {
        updatedItems.splice(itemIndex, 1);
      } else {
        updatedItems[itemIndex] = updatedItem;
      }
  
      return updatedItems;
    });
  };
  
  
  
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "I am accessible everywhere",
  };

  console.log('inside cartcontext.provider', cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
