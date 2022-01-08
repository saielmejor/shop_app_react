
import { useState } from 'react';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';
function App() {
  //state management for cart 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    // console.log('hello')
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

//Wrap with CartProvider so it can pass cart data into all components 
  return (
    <CartProvider>
      {cartIsShown && <Cart  onClose= {hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      {/* <Header onShownCart={showCartHandler} /> */}
      <main>
        <Meals />
      </main>
    </CartProvider>
    // <Fragment>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />
    //   <main>
    //     <Meals />
    //   </main>
    // </Fragment>
  );
};

export default App;
