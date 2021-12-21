import * as string from '../string'
const initialState = {
    orders: [],
    error: null

}
const OrderReducer = (state = initialState, action) => {
    switch(action.type){
        case string.ADDORDER:
            return{
                ...state,
                orders: action.payload
            }
        
        default:
            return state
    }
}

export default OrderReducer
