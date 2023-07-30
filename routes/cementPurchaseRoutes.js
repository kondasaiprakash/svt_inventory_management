const express = require('express');
const router = express.Router();
const CementPurchaseController = require('../controllers/cementPurchaseController');

// Create a new cement purchase
router.post('/', CementPurchaseController.createCementPurchase);

// Get a specific cement purchase by ID
router.get('/:id', CementPurchaseController.getCementPurchaseById);

// Get all cement purchases
router.get('/', CementPurchaseController.getAllCementPurchases);

// Update a cement purchase
router.put('/:id', CementPurchaseController.updateCementPurchase);

// Delete a cement purchase
router.delete('/:id', CementPurchaseController.deleteCementPurchase);

module.exports = router;
