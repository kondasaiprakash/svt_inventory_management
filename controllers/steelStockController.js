const SteelStockService = require('../services/steelStockService');

class SteelStockController {
  static async createSteelStock(req, res) {
    try {
      const stockData = req.body;
      const steelStock = await SteelStockService.createSteelStock(stockData);
      res.status(201).json({ steelStock });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSteelStockById(req, res) {
    try {
      const stockId = req.params.id;
      const steelStock = await SteelStockService.getSteelStockById(stockId);
      if (!steelStock) {
        return res.status(404).json({ message: 'Steel stock not found' });
      }
      res.json({ steelStock });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllSteelStocks(req, res) {
    try {
      const steelStocks = await SteelStockService.getAllSteelStocks();
      res.json({ steelStocks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateSteelStock(req, res) {
    try {
      const stockId = req.params.id;
      const stockData = req.body;
      const steelStock = await SteelStockService.updateSteelStock(stockId, stockData);
      if (!steelStock) {
        return res.status(404).json({ message: 'Steel stock not found' });
      }
      res.json({ steelStock });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteSteelStock(req, res) {
    try {
      const stockId = req.params.id;
      const deleted = await SteelStockService.deleteSteelStock(stockId);
      if (!deleted) {
        return res.status(404).json({ message: 'Steel stock not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SteelStockController;
