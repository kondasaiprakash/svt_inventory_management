// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrder);
router.put('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);
router.get('/', OrderController.getAllOrders);

module.exports = router;
