import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  // Group items by name and calculate total amount
  const groupedItems = {};
  let totalAmount = 0;

  cartCntx.items.forEach((item) => {
    if (!groupedItems[item.name]) {
      groupedItems[item.name] = { ...item, quantity: 0 };
    }
    // Convert quantity to number and add to the total
    groupedItems[item.name].quantity += parseInt(item.quantity);
    totalAmount += item.price * parseInt(item.quantity);
  });



  const cartItemAddHandler=(item)=>{
 cartCntx.addItem({...item,quantity:1});
  };

  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };
  

  const cartItems = (
    <ul className={classes['cart-items']}>
      {Object.values(groupedItems).map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
         // onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button---alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
