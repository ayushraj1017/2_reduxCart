import React, { useEffect } from "react";
import CartItem from "./CartItem";
import {clearCart, totalMoney} from '../redux/cart/index'
import {connect} from 'react-redux'


const CartContainer = ({ cart = [] ,clearCart,total,totalMoney}) => {
  useEffect(()=>{
    totalMoney()

  },[cart]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={clearCart}
         className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps=state=>{
  return {
    cart:state.cart,
    total:state.total
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    clearCart:()=>dispatch(clearCart()),
    totalMoney:()=>dispatch(totalMoney())
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
