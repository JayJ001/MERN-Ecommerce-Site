const Item = require('../models/itemModel')
const Cart = require('../models/cartModel');
const mongoose = require('mongoose');

// get home page
const getHome = async (req, res) => {

}

// get shop
const getShop = async (req, res) => {
    const items = await Item.find({}).sort({ itemName: 1 });
    res.status(200).json(items);
}

// get item
const getItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' })
    }

    const item = await Item.findById(id)
    if (!item) {
        return res.status(404).json({ error: 'Item not found' })
    }
    res.status(200).json(item);
}

// get cart
const getCart = async (req, res) => {
    const cart = await Cart.find({}).sort({ itemName: 1 });
    res.status(200).json(cart);
}

const deleteCart = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid id'})
    }
    const item = await Cart.findById(id)
    await Cart.findByIdAndDelete(id)
    if (!item) {
        return res.status(404).json({ error: 'Item not found' })
    }
    res.status(200).json(item);
}

// get checkout
const getCheckout = async (req, res) => {

}

// get login
const getLogin = async (req, res) => {

}

// add a new item to cart
const addItem = async (req, res) => {
    const { name, price, quantity, path } = req.body;
    try {
        const checkItem = await Cart.findOne({ name })

        if (!checkItem) {
            const user_id = req.user._id 
            const item = await Cart.create({ name, price, quantity, path, user_id })
            res.status(200).json(item)
        } else {
            checkItem.quantity += 1
            await checkItem.save();
            res.status(200).json(checkItem)
        }
        
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteItem = async (req, res) => {
    const {name, price, quantity, path} = req.body;
    try{
        await Cart.findOneAndDelete({ name })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getHome,
    getShop,
    getItem,
    getCart,
    getCheckout,
    getLogin,
    addItem,
    deleteItem,
    deleteCart
}