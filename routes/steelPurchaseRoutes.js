const express = require('express');
const SteelPurchaseController = require('../controllers/steelPurchaseController');

const router = express.Router();

// Create a new steel purchase
router.post('/', SteelPurchaseController.createSteelPurchase);

// Get a steel purchase by ID
router.get('/:id', SteelPurchaseController.getSteelPurchaseById);

// Update a steel purchase
router.put('/:id', SteelPurchaseController.updateSteelPurchase);

// Delete a steel purchase
router.delete('/:id', SteelPurchaseController.deleteSteelPurchase);

// Get all steel purchases
router.get('/', SteelPurchaseController.getAllSteelPurchases);

module.exports = router;
