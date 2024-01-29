import '../styles/Shop.css'
import { useEffect, useState } from 'react'
import Display from '../components/Display'

const Shop = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/shop')
                const json = await response.json()
                if (response.ok) {
                    setItems(json);
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchItems()
    }, [])

    return (
        <div className="shop-container">
            <div className="selector-container">
                <label>Filter by:</label>
                <select className="category-selector">
                    <option value="none">Select</option>
                    <option value="dairy">Dairy</option>
                    <option value="fruits-vegetables">Fruits & Vegetables</option>
                    <option value="meats-seafood">Meats & Seafood</option>
                    <option value="pantry">Pantry</option>
                    <option value="snacks">Snacks</option>
                </select>

                <label>Sort by:</label>
                <select className="sort">
                    <option value="A-Z">A-Z</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
            <div className="item-container">
                <div className="shop-items">
                    {items && items.map((item) => (
                        <Display item={item} key={item._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop