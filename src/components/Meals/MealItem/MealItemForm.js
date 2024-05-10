import React,{useContext} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm=props=>{
    const cartcntx=useContext(CartContext)
    console.log('reinitialised cartcntx',cartcntx);
    const addItemToCart=(event)=>{
  //update the cartcntx.items
  event.preventDefault();
  const quantity=document.getElementById('amount_'+props.id).value
  cartcntx.addItem({...props.item,quantity:quantity})
  //cartcntx.items.push(props.item);

  console.log('after  addItemToCart',  cartcntx.items);

    }
return(
     <form className={classes.form}> 
     {console.log('inside render',cartcntx.items)}
    <Input label="Amount" 
     input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button onClick={addItemToCart}>+Add</button>
</form>
);
};
export default MealItemForm;