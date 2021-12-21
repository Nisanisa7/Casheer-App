import { array } from "yup";
import * as string from "../string";
const initialState = {
  carts: [],
  totalPrice: 0,
 
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.ADD_CART:
      const items = action.payload;
      const result = state.carts.findIndex(
        (item) => item.idfood === items.idfood
      );

      if (result >= 0) {
        const container = state.carts.filter(
          (item) => item.idfood !== items.idfood
        );
        return {
          ...state,
          carts: container,
          totalPrice: state.totalPrice - action.payload.price
        };
      }
      return {
        ...state,
        carts: [...state.carts, items],
        totalPrice: state.totalPrice + action.payload.price * action.payload.amount,
      };
      
    case string.INCREMENTQTY:
        const carts = [...state.carts]
        // console.log(carts[action.payload].qty, 'ini reducer');
        if(carts[action.payload].quantity < carts[action.payload].qty)
        carts[action.payload].quantity += 1 
        return{
            ...state,
            carts: carts
        }
    case string.DECREMENTQTY:
        const cartS = [...state.carts]
        if(cartS[action.payload].quantity >= 2)
        cartS[action.payload].quantity -= 1 
        return{
            ...state,
            carts: cartS
        }
    case string.EMPTYCART:
        return{
            carts :[],
            totalPrice: 0
        }
    default:
     return state;
    }
};

export default CartReducer;
