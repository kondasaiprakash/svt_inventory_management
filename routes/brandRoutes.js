const express = require('express');
const BrandController = require('../controllers/brandController');

const router = express.Router();

// Create a new brand
router.post('/', BrandController.createBrand);
router.get('/', BrandController.getBrands);

// Get a brand by ID
router.get('/:id', BrandController.getBrandById);

// Update a brand
router.put('/:id', BrandController.updateBrand);

// Delete a brand
router.delete('/:id', BrandController.deleteBrand);

module.exports = router;
