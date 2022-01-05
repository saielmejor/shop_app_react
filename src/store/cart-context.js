import React from 'react' ; 

//react context 

const CartContext=React.createContext({ 
    items:[], 
    totalAmount: 0, 
    addItem:(item)=>{}, 
    removeItem:(id)=>{}
}); 
export default CartContext; 