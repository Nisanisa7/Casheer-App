import * as string from "../string"

export const Addcart = (data) => async(dispatch) =>{
   const cartData = {...data, quantity: 1}
   dispatch({type: string.ADD_CART, payload: cartData})
}

export function quantityUp(idfood, val){
   return {type: string.INCREMENTQTY, idfood, up: val}
 }
