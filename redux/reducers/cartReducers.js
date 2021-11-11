let defaultState = {
    selectedItems: {
        items: [] ,shopId : null
    }, 
}
let cartReducers = (state = defaultState , action) => {
    let newState = { ...state}
    switch (action.type) {
        //ADD_TO_CART => ADD THE ITEMS TO THE CART , IF IT IS NEW THEN ADD TO THE CART ,ELSE IF THE CART IS ALREADY HAVING ITEM THEN THE PAYLOAD.ITEM WILL APPEND TO THE CART
        case "ADD_TO_CART" : {
            newState.selectedItems = { items : [...newState.selectedItems.items , action.payload.item] , shopId : action.payload.shopId }
            return newState
        }
        //DELETE_CART => REMOVE THE ITEM FROM THE CART
        case "REMOVE_FROM_CART" : {
            var arr = [...newState.selectedItems.items]
            if(arr.indexOf(action.payload.item) > -1){
                arr.splice(arr.indexOf(action.payload.item),1)
            }
            newState.selectedItems = { items : arr , shopId : action.payload.shopId }
            return newState
        }
        //DELETE_CART WILL REMOVE THE ITEMS FROM THE CART AND ASSIGN THE NEW PAYLOAD ITEMS IN THE CART
        case "DELETE_CART" : {
            newState.selectedItems = { items : [action.payload.item] , shopId : action.payload.shopId}
            return newState
        }
        default : {return state}
    }
}

export default cartReducers;

