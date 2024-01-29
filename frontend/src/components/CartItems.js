import '../styles/CartItems.css'
import { useShopContext } from '../hooks/useShopContext'

const CartDisplay = ({ item }) => {
    const {dispatch} = useShopContext()

    const handleDelete = async() => {
        console.log(item._id)
        const res = await fetch('/deletecartitem/' + item._id, {
            method: 'DELETE'
        })
        const json = await res.json()

        if(res.ok){
            dispatch({type: 'DELETE_ITEM', payload: json})
        }
    }

    return (
        <div className="cart-item-container">
            <div className="img-container">
                <img src = {item.path} />
            </div>
            <div className="info-container">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p className='total'>Total: {item.quantity * item.price}</p>
                <button onClick = {handleDelete}>Delete</button>
            </div>
        </div>
    )
}


export default CartDisplay