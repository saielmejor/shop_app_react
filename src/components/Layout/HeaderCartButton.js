
import { useContext } from 'react';
import CartIcon from "../Cart/CartIconButton";
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    // this reduce function allows us to derive the number of items in the cart with reduce 
    // reduce has a starting number which is set to 0 then it will add item.amount
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>

            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default HeaderCartButton;