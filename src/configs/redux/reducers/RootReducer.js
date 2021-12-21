import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";
import FoodReducer from "./foodReducer";
import OrderReducer from "./orderReducer";

export function CLEARSTORE(){
    return {
        type:"CLEARSTORE"
    };
  }
const RootReducer = combineReducers({
    food : FoodReducer,
    user : AuthReducer,
    carts : CartReducer,
    orders: OrderReducer
})

export default RootReducer