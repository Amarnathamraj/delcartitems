import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},//recives item that should be added 
    removeItem:(id)=>{}//receives id that should be removed
});
export default CartContext;