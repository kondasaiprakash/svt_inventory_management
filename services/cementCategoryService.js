const CementCategory  = require('../models/cementCategory');

class CementCategoryService {
  static async createCementCategory(data) {
    try {
      const cementCategory = await CementCategory.create(data);
      return cementCategory;
    } catch (error) {
      throw new Error('Failed to create cement category');
    }
  }

  static async getCementCategoryById(id) {
    try {
      const cementCategory = await CementCategory.findByPk(id);
      if (!cementCategory) {
        throw new Error('Cement category not found');
      }
      return cementCategory;
    } catch (error) {
      throw new Error('Failed to get cement category');
    }
  }

  static async updateCementCategory(id, data) {
    try {
      const cementCategory = await CementCategory.findByPk(id);
      if (!cementCategory) {
        throw new Error('Cement category not found');
      }
      const updatedCementCategory = await cementCategory.update(data);
      return updatedCementCategory;
    } catch (error) {
      throw new Error('Failed to update cement category');
    }
  }

  static async deleteCementCategory(id) {
    try {
      const cementCategory = await CementCategory.findByPk(id);
      if (!cementCategory) {
        throw new Error('Cement category not found');
      }
      await cementCategory.destroy();
      return true;
    } catch (error) {
      throw new Error('Failed to delete cement category');
    }
  }

  static async getAllCementCategories() {
    try {
      const cementCategories = await CementCategory.findAll();
      return cementCategories;
    } catch (error) {
      throw new Error('Failed to get cement categories');
    }
  }
}

module.exports = CementCategoryService;
