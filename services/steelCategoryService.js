const  SteelCategory  = require('../models/steelCategory');

class SteelCategoryService {
  static async createSteelCategory(data) {
    try {
      const steelCategory = await SteelCategory.create(data);
      return steelCategory;
    } catch (error) {
      throw new Error('Failed to create steel category');
    }
  }

  static async getSteelCategoryById(id) {
    try {
      const steelCategory = await SteelCategory.findByPk(id);
      if (!steelCategory) {
        throw new Error('Steel category not found');
      }
      return steelCategory;
    } catch (error) {
      throw new Error('Failed to get steel category');
    }
  }

  static async updateSteelCategory(id, data) {
    try {
      const steelCategory = await SteelCategory.findByPk(id);
      if (!steelCategory) {
        throw new Error('Steel category not found');
      }
      const updatedSteelCategory = await steelCategory.update(data);
      return updatedSteelCategory;
    } catch (error) {
      throw new Error('Failed to update steel category');
    }
  }

  static async deleteSteelCategory(id) {
    try {
      const steelCategory = await SteelCategory.findByPk(id);
      if (!steelCategory) {
        throw new Error('Steel category not found');
      }
      await steelCategory.destroy();
      return true;
    } catch (error) {
      throw new Error('Failed to delete steel category');
    }
  }

  static async getAllSteelCategories() {
    try {
      const steelCategories = await SteelCategory.findAll();
      return steelCategories;
    } catch (error) {
      throw new Error('Failed to get steel categories');
    }
  }
}

module.exports = SteelCategoryService;
