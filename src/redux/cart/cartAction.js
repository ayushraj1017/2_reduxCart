import {CLEAR_CART,INCREMENT,DECREMENT,REMOVE_SINGLE_ITEM, TOTAL_MONEY,ADD_TO_BAG} from './cartTypes'


export const clearCart=()=>{
    return{
        type:CLEAR_CART,
    }
}

export const increment=(id)=>{
    return {
        type:INCREMENT,
        payload:id
    }
}

export const decrement=(id)=>{
    return{
        type:DECREMENT,
        payload:id
    }
}

export const removeSingleItem=(id)=>{
    return{
        type:REMOVE_SINGLE_ITEM,
        payload:id
    }
}

export const totalMoney=()=>{
    return{
        type:TOTAL_MONEY,
        
    }
}

export const addToBag=()=>{
    return{
        total:ADD_TO_BAG
    }
}

