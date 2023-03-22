import Header from "./Components/Layout/Header";
import React from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import {useState } from 'react';
import CartProvider from "./store/CartProvider";
// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Cart from './components/Cart/Cart';

function App() {
  const [CartIsShown,setIsCartShown] = useState(false);

  const showCartHandler =()=>{
    setIsCartShown(true);
  }
  const hideCartHandler = ()=>{
    setIsCartShown(false)
  }
  return (
    <CartProvider>
      {CartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;