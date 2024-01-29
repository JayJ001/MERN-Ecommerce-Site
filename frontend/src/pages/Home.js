import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const categories = [
    {
        name: "Dairy",
        url: "/shop/dairy",
        path: "images/categories/dairy.webp"
    },
    {
        name: "Fruits & Vegetables",
        url: "/shop/fruits-vegetables",
        path: "images/categories/fruits-vegetables.webp"
    },
    {
        name: "Meats & Seafood",
        url: "/shop/meats-seafood",
        path: "images/categories/meats-seafood.webp"
    },
    {
        name: "Pantry",
        url: "/shop/Pantry",
        path: "images/categories/pantry.webp"
    },
    {
        name: "Snacks",
        url: "/shop/Snacks",
        path: "images/categories/snacks.webp"
    },
];

const Home = () => {
    return (
        <div className="home">
            <img className='home-banner' src="images/home/banner1.jpeg" />
            <h2>Shop by Category</h2>
            <div className="categories">
                {categories.map((category) => (
                    <Link key={category.name} className="category-container" to={category.url}>
                        <img className='category-img' src={category.path} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Home;
