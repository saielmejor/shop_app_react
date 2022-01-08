import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //add totalamount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id); 
      //removes item 
  };
  const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item,amount:1}); 
      //this will add "1" item whenever the user press the plus button
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)} />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onclose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>{" "}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
