const express = require('express');
const router = express.Router();
const PurchaseController = require('../controllers/purchaseController');

// Create a new purchase
router.post('/', PurchaseController.createPurchase);

// Get a purchase by ID
router.get('/:id', PurchaseController.getPurchaseById);

// Update a purchase by ID
router.put('/:id', PurchaseController.updatePurchase);

// Delete a purchase by ID
router.delete('/:id', PurchaseController.deletePurchase);

// Get all purchases
router.get('/', PurchaseController.getAllPurchases);

module.exports = router;
