
import * as string from '../string'
const initialState = {
    food : [],
    totalpage : 0
}
const FoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case string.GET_FOOD:
            return{
                ...state,
                food: [...state.food, ...action.payload.item],
                totalpage : action.payload.totalpage 
            }
        case string.ADD_FOOD:
            return{
               ...state,
               food: [...state.food, action.payload]
            }
        default :
        return state
    }
      
    
}

export default FoodReducer
