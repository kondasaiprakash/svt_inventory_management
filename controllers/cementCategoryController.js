const CementCategoryService = require('../services/cementCategoryService');

class CementCategoryController {
  static async createCementCategory(req, res) {
    try {
      const cementCategoryData = req.body;
      const cementCategory = await CementCategoryService.createCementCategory(cementCategoryData);
      res.status(201).json({ success: true, cementCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getCementCategoryById(req, res) {
    try {
      const { id } = req.params;
      const cementCategory = await CementCategoryService.getCementCategoryById(id);
      res.status(200).json({ success: true, cementCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updateCementCategory(req, res) {
    try {
      const { id } = req.params;
      const cementCategoryData = req.body;
      const updatedCementCategory = await CementCategoryService.updateCementCategory(id, cementCategoryData);
      res.status(200).json({ success: true, cementCategory: updatedCementCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async deleteCementCategory(req, res) {
    try {
      const { id } = req.params;
      await CementCategoryService.deleteCementCategory(id);
      res.status(200).json({ success: true, message: 'Cement category deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getAllCementCategories(req, res) {
    try {
      const cementCategories = await CementCategoryService.getAllCementCategories();
      res.status(200).json({ success: true, cementCategories });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = CementCategoryController;
