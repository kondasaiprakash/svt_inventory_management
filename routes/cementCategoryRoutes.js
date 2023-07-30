const express = require('express');
const router = express.Router();
const CementCategoryController = require('../controllers/cementCategoryController');

router.post('/', CementCategoryController.createCementCategory);
router.get('/:id', CementCategoryController.getCementCategoryById);
router.put('/:id', CementCategoryController.updateCementCategory);
router.delete('/:id', CementCategoryController.deleteCementCategory);
router.get('/', CementCategoryController.getAllCementCategories);

module.exports = router;
