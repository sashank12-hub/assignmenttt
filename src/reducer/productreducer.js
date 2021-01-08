import * as types from "../types/type"
///RXREDUCER
const initialState = {

    products:[],
    cart:[]

}

export const  productreducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case types.Add_PRODUCT:
        return { ...state,cart:[...state.cart,payload] }

    case types.REMOVE_PRODUCT:
                if(state.cart.length>0){
                    const DELETE_ITEM=state.cart.findIndex(item=>item.imdbID===payload.imdbID)
                    var newcart=[]
                    newcart=[...state.cart]
                    newcart.splice(DELETE_ITEM,1)
                }

        return {...state,cart:[...newcart]}
    default:
        return state
    }
}



