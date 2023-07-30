const SteelPurchaseService = require('../services/steelPurchaseService');

class SteelPurchaseController {
  static async createSteelPurchase(req, res) {
    try {
      const steelPurchase = await SteelPurchaseService.createSteelPurchase(req.body);
      res.status(201).json(steelPurchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSteelPurchaseById(req, res) {
    try {
      const { id } = req.params;
      const steelPurchase = await SteelPurchaseService.getSteelPurchaseById(id);
      if (steelPurchase) {
        res.json(steelPurchase);
      } else {
        res.status(404).json({ error: 'Steel purchase not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateSteelPurchase(req, res) {
    try {
      const { id } = req.params;
      const steelPurchase = await SteelPurchaseService.updateSteelPurchase(id, req.body);
      res.json(steelPurchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteSteelPurchase(req, res) {
    try {
      const { id } = req.params;
      const result = await SteelPurchaseService.deleteSteelPurchase(id);
      if (result) {
        res.json({ message: 'Steel purchase deleted successfully' });
      } else {
        res.status(404).json({ error: 'Steel purchase not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllSteelPurchases(req, res) {
    try {
      const steelPurchases = await SteelPurchaseService.getAllSteelPurchases();
      res.json(steelPurchases);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SteelPurchaseController;
