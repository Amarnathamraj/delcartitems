import  {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


//u need to passs onshowcart to headercartbutton which u recivee through app.js
 const Header=(props)=>{
   return (
   <Fragment>
    <header className={classes.header}>
        <h1> Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!!!"/>
        <summary/>
    </div>
   </Fragment>
   );
 };
 export default Header;