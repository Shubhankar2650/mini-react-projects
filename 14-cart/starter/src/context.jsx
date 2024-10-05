import { createContext, useContext, useReducer } from "react"
import cartItems from "./data";
import { INCREASE, DECREASE, DISPLAY_ITEMS, REMOVE, LOADING, CLEAR_CART } from "./action";
import { reducer } from "./reducer";
import { getTotal } from "./utils";

const AppContext = createContext();
const url = 'https://www.course-api.com/react-useReducer-cart-project';


const initialState = {
    cart: new Map(cartItems.map((items) => [items.id, items])),
    loading: false
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { totalCost, totalItems } = getTotal(state.cart);

    console.log(totalCost)

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    }
    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } });
    }
    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } });
    }

    return <AppContext.Provider value={{ ...state, clearCart, removeItem, increase, decrease, totalCost, totalItems }}>
        {props.children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;

