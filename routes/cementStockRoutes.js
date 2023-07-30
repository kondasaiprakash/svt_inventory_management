const express = require('express');
const router = express.Router();
const CementStockController = require('../controllers/cementStockController');

// Create a new cement stock
router.post('/', CementStockController.createCementStock);

// Get a cement stock by ID
router.get('/:id', CementStockController.getCementStockById);

// Get all cement stocks
router.get('/', CementStockController.getAllCementStocks);

// Update a cement stock
router.put('/:id', CementStockController.updateCementStock);

// Delete a cement stock
router.delete('/:id', CementStockController.deleteCementStock);

module.exports = router;
