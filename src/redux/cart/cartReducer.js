import cartItems from "../../cart-items";
import {
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_SINGLE_ITEM,
  TOTAL_MONEY,
  ADD_TO_BAG,
} from "./cartTypes";

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case INCREMENT:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case DECREMENT: {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItems) => cartItems.amount !== 0);
      return {
        ...state,
        cart: tempCart,
      };
    }
    case REMOVE_SINGLE_ITEM:
      let newCart = state.cart.filter((item) => item.id !== action.payload);
            return {
        ...state,
        cart: newCart,
      };
      

   
    
    case TOTAL_MONEY:
        let{total,amount}=state.cart.reduce(
            (cartTotal,cartItem)=>{
                let{price,amount}=cartItem
                let itemTotal=price*amount;
                cartTotal.total+=itemTotal;
                cartTotal.amount+=amount
                return cartTotal
            },
            {
                total:0,
                amount:0
            }
            )
            total=parseFloat(total.toFixed(2))
        
            return{
                ...state,
                amount:amount,
                total:total
            }
        case ADD_TO_BAG:{
            let {amount}=state.cart.reduce((cartTotalAmount,cartTotal)=>{
                let{amount}=cartTotal;
                cartTotalAmount.amount+=amount
                return cartTotalAmount

            },
            {
                amount:0,
            })
            return {
                ...state,
                amount
            }

        }
        
        

    default:
      return state;
  }
};

export default cartReducer;
