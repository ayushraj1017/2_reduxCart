import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  // cart setup

  return (
    <Provider store={store}>
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
      </main>
    </Provider>
  );
}

export default App;
