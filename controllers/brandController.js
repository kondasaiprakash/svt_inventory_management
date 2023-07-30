const BrandService = require('../services/brandService');

class BrandController {
  static async createBrand(req, res) {
    const { name } = req.body;

    try {
      const brand = await BrandService.createBrand(name);
      res.status(201).json(brand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBrandById(req, res) {
    const { id } = req.params;

    try {
      const brand = await BrandService.getBrandById(id);
      res.json(brand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBrands(req, res) {
    try {
      const brands = await BrandService.getBrands();
      res.json(brands);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  static async updateBrand(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const brand = await BrandService.updateBrand(id, name);
      res.json(brand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteBrand(req, res) {
    const { id } = req.params;

    try {
      const brand = await BrandService.deleteBrand(id);
      res.json(brand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BrandController;
