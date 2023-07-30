const Brand = require('../models/brand');

class BrandService {
  static async createBrand(name) {
    try {
      const brand = await Brand.create({ name });
      return brand;
    } catch (error) {
      throw new Error(`Failed to create brand: ${error.message}`);
    }
  }

  static async getBrandById(id) {
    try {
      const brand = await Brand.findByPk(id);
      if (!brand) {
        throw new Error('Brand not found');
      }
      return brand;
    } catch (error) {
      throw new Error(`Failed to get brand: ${error.message}`);
    }
  }

  static async getBrands() {
    try {
      const brands = await Brand.findAll();
      return brands;
    } catch (error) {
      throw error;
    }
  }

  static async updateBrand(id, name) {
    try {
      const brand = await Brand.findByPk(id);
      if (!brand) {
        throw new Error('Brand not found');
      }
      await brand.update({ name });
      return brand;
    } catch (error) {
      throw new Error(`Failed to update brand: ${error.message}`);
    }
  }

  static async deleteBrand(id) {
    try {
      const brand = await Brand.findByPk(id);
      if (!brand) {
        throw new Error('Brand not found');
      }
      await brand.destroy();
      return brand;
    } catch (error) {
      throw new Error(`Failed to delete brand: ${error.message}`);
    }
  }
}

module.exports = BrandService;
