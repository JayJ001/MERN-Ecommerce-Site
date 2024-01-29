import { useEffect } from "react"
import CartDisplay from '../components/CartItems'
import '../styles/Cart.css'
import { useShopContext } from "../hooks/useShopContext"

const Cart = () => {
    const {items, dispatch} = useShopContext() 

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const response = await fetch('/cart')
                const json = await response.json()
                if(response.ok){
                    dispatch({type: 'SET_ITEMS', payload: json})
                }
            } catch(err){
                console.log(err)
            }
        }
        fetchItems()
    }, [])

    const getSubtotal = () => {
        var subtotal = 0
        if(items){
            items.map((item) => (
                subtotal += item.price * item.quantity
            ))
        }
        return subtotal
    }

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {items && items.map((item) => (
                <CartDisplay key = {item._id} item={item}/>
            ))}
            <div className="summary-container">
                <h2>Order Summary</h2>
                <p className="subtotal">Subtotal: <span>${getSubtotal().toFixed(2)}</span> </p>
                <p className="tax">Estimated HST/GST: <span>${(getSubtotal() * 0.13).toFixed(2)}</span></p>
                <p className="order-total">Order Total: <span>${(getSubtotal() + getSubtotal() * 0.13).toFixed(2)}</span></p>
                <button>Place Order</button>
            </div>
        </div>
    )
}

export default Cart