// routes/steelOrderRoutes.js

const express = require('express');
const router = express.Router();
const SteelOrderController = require('../controllers/steelOrderController');

router.post('/', SteelOrderController.createSteelOrder);
router.get('/:id', SteelOrderController.getSteelOrderById);
router.get('/', SteelOrderController.getAllSteelOrders);
router.put('/:id', SteelOrderController.updateSteelOrder);
router.delete('/:id', SteelOrderController.deleteSteelOrder);

module.exports = router;
