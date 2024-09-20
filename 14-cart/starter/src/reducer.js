import { INCREASE, DECREASE, DISPLAY_ITEMS, REMOVE, LOADING, CLEAR_CART } from "./action";

export const reducer = (state, action) => {
    if (action.type === INCREASE) {
        const id = action.payload.id;
        const newCart = new Map(state.cart)
        const item = newCart.get(action.payload.id);
        const newItem = { ...item, amount: item.amount + 1 };
        newCart.set(id, newItem)
        return { ...state, cart: newCart }
    }
    if (action.type === DECREASE) {
        const id = action.payload.id;
        const newCart = new Map(state.cart)
        const item = newCart.get(action.payload.id);
        if (item.amount == 1) {
            newCart.delete(id);
            return { ...state, cart: newCart };
        }
        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(id, newItem)
        return { ...state, cart: newCart }
    }
    if (action.type === DISPLAY_ITEMS) {

    }
    if (action.type === REMOVE) {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id)
        // newCart.delete(id);
        console.log(newCart)

        return { ...state, cart: newCart }
    }
    if (action.type === LOADING) {

    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() }
    }
    throw new Error(`there's an error in  ${action.type}`);

    return state;
}