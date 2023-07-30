const express = require('express');
const router = express.Router();
const SteelCategoryController = require('../controllers/steelCategoryController');

router.post('/', SteelCategoryController.createSteelCategory);
router.get('/:id', SteelCategoryController.getSteelCategoryById);
router.put('/:id', SteelCategoryController.updateSteelCategory);
router.delete('/:id', SteelCategoryController.deleteSteelCategory);
router.get('/', SteelCategoryController.getAllSteelCategories);

module.exports = router;
