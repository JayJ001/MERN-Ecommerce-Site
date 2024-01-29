import '../styles/Display.css'
import { useAuthContext } from '../hooks/useAuthContext'

const Display = ({ item }) => {
    const { user } = useAuthContext()

    const handleClick = async(e) => {
        e.preventDefault()
        const name = item.name
        const price = item.price
        const quantity = 1
        const path = item.path
        const itemToAdd = {name, price, quantity, path}

        const res = await fetch('/additem', {
            method: 'POST',
            body: JSON.stringify(itemToAdd),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json() 
        if(!res.ok){
            console.log(json.error)
        }
        if(res.ok){
            console.log('Item added', json)
        }
    }

    return (
            <form className="item-display" onSubmit={handleClick}>
                <img src={item.path} />
                <h4>${item.price}</h4>
                <p>{item.name}</p>
                <button>Add to Cart</button>
            </form>
    )
}

export default Display