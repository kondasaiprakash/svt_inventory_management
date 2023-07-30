const express = require('express');
const router = express.Router();
const SteelStockController = require('../controllers/steelStockController');

router.post('/', SteelStockController.createSteelStock);
router.get('/:id', SteelStockController.getSteelStockById);
router.get('/', SteelStockController.getAllSteelStocks);
router.put('/:id', SteelStockController.updateSteelStock);
router.delete('/:id', SteelStockController.deleteSteelStock);

module.exports = router;
