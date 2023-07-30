const SteelCategoryService = require('../services/steelCategoryService');

class SteelCategoryController {
  static async createSteelCategory(req, res) {
    try {
      const steelCategoryData = req.body;
      const steelCategory = await SteelCategoryService.createSteelCategory(steelCategoryData);
      res.status(201).json({ success: true, steelCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getSteelCategoryById(req, res) {
    try {
      const { id } = req.params;
      const steelCategory = await SteelCategoryService.getSteelCategoryById(id);
      res.status(200).json({ success: true, steelCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updateSteelCategory(req, res) {
    try {
      const { id } = req.params;
      const steelCategoryData = req.body;
      const updatedSteelCategory = await SteelCategoryService.updateSteelCategory(id, steelCategoryData);
      res.status(200).json({ success: true, steelCategory: updatedSteelCategory });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async deleteSteelCategory(req, res) {
    try {
      const { id } = req.params;
      await SteelCategoryService.deleteSteelCategory(id);
      res.status(200).json({ success: true, message: 'Steel category deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getAllSteelCategories(req, res) {
    try {
      const steelCategories = await SteelCategoryService.getAllSteelCategories();
      res.status(200).json({ success: true, steelCategories });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = SteelCategoryController;
