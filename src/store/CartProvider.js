import { useReducer } from "react";
import CartContext from "./cart-context";

// define default Cart State
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // add an item to the array but generates another array using concat()
   //items in the current state and concat adds new items into new array
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //accessing the existing cart item

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem=state.items[existingCartItemIndex];
    //gets the existing index of cart item 

    
    let updatedItems; 
 
    if (existingCartItem){ 
      
       const updatedItem={ 
            ...existingCartItem,
            amount:existingCartItem.amount + action.item.amount
            //calculate the amount 
        };
        updatedItems=[...state.items]; 
        updatedItems[existingCartItemIndex]=updatedItem;

    } else { 
        
        updatedItems=state.items.concat(action.item);
        //add new array with item if the item does not exist inside the cart   
    }
    //return new updated state snapshot
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }; 
  //add remove aciton 
  if(action.type==='REMOVE'){ 
      const existingCartItemIndex=state.items.findIndex(
        (item) => item.id === action.id
      ); 
        const existingItem=state.items[existingCartItemIndex];
        const updatedTotalAmount=state.totalAmount - existingItem.price; //subracts the total amount 

        let updatedItems; 
        if (existingItem.amount === 1) { 
            //filters the item and creates a new array if its true 
            updatedItems=state.items.filter(item=>item.id !== action.id); 
        } else { 
        const updatedItem={...existingItem, amount:existingItem.amount-1}; 
        updatedItems=[...state.items]; 
        updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{ 
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
  };

  return defaultCartState;
};
//this is the cart provider context that wraps all the data so it can be used in multiple components
const CartProvider = (props) => {
  // call use reducer it needs the previous state and then dispatch an action
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // you can name however you want but you need to be descriptive
    // it pretty much obtains the item which will be used to handle the current state
    dispatchCartAction({ type: "ADD", item: item }); // you can dispatch anything you want
    // add the item to the reducing
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };
  // wraps all the children
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
