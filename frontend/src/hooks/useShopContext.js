import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

export const useShopContext = () => {
    const context = useContext(ShopContext)

    if(!context) {
        throw Error('Context error')
    }

    return context
}