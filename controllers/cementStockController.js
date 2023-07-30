const CementStockService = require('../services/cementStockService');

class CementStockController {
  static async createCementStock(req, res) {
    try {
      const { brandId, cementCategoryId, quantity, price } = req.body;
      const data = { brandId, cementCategoryId, quantity, price };
      const cementStock = await CementStockService.createCementStock(data);
      res.status(201).json(cementStock);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCementStockById(req, res) {
    try {
      const { id } = req.params;
      const cementStock = await CementStockService.getCementStockById(id);
      if (cementStock) {
        res.json(cementStock);
      } else {
        res.status(404).json({ message: 'Cement stock not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllCementStocks(req, res) {
    try {
      const cementStocks = await CementStockService.getAllCementStocks();
      res.json(cementStocks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateCementStock(req, res) {
    try {
      const { id } = req.params;
      const { brandId, cementCategoryId, quantity, price } = req.body;
      const data = { brandId, cementCategoryId, quantity, price };
      const cementStock = await CementStockService.updateCementStock(id, data);
      if (cementStock) {
        res.json(cementStock);
      } else {
        res.status(404).json({ message: 'Cement stock not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteCementStock(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CementStockService.deleteCementStock(id);
      if (deleted) {
        res.json({ message: 'Cement stock deleted' });
      } else {
        res.status(404).json({ message: 'Cement stock not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CementStockController;
