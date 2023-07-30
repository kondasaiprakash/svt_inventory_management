// routes/cementOrderRoutes.js

const express = require('express');
const CementOrderController = require('../controllers/cementOrderController');

const router = express.Router();

router.post('/', CementOrderController.createCementOrder);
router.get('/:cementOrderId', CementOrderController.getCementOrderById);
router.get('/', CementOrderController.getAllCementOrders);
router.put('/:cementOrderId', CementOrderController.updateCementOrder);
router.delete('/:cementOrderId', CementOrderController.deleteCementOrder);

module.exports = router;
