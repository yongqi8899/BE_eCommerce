const express = require('express');
const { getAllOrders, createOrder, getOrder, updateOrder, deleteOrder } = require('../controllers/order');
const { validateCreateOrder, validateUpdateOrder } = require('../schemas/orderSchema');

const router = express.Router();

router.get('/', getAllOrders);
router.post('/', validateCreateOrder, createOrder);
router.get('/:id', getOrder);
router.put('/:id', validateUpdateOrder, updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;