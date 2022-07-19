import {useContext} from "react";
import {AppContext} from "../context";

export const useCart = () => {
    const {itemCart, setItemCart} = useContext(AppContext)
    const totalPrice = itemCart.reduce( (sum, obj) => obj.price + sum, 0)

    return { itemCart, setItemCart, totalPrice }
}
