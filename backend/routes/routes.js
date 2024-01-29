const express = require('express');

const {
    getHome,
    getShop, 
    getItem,
    getCart,
    getCheckout,
    getLogin,
    addItem,
    deleteItem,
    deleteCart
} = require('../controllers/storeControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.get('/', (req, res) => {
});

router.get('/shop', getShop);

router.get('/item/:id', getItem)

router.get('/cart', getCart)

router.post('/additem', addItem);

router.delete('/deleteitem', deleteItem)

router.delete('/deletecartitem/:id', deleteCart)

router.get('/login');

module.exports = router;