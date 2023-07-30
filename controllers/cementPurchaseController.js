const CementPurchaseService = require('../services/cementPurchaseService');

class CementPurchaseController {
  static async createCementPurchase(req, res) {
    try {
      const cementPurchase = await CementPurchaseService.createCementPurchase(req.body);
      res.status(201).json(cementPurchase);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create cement purchase' });
    }
  }

  static async getCementPurchaseById(req, res) {
    try {
      const { id } = req.params;
      const cementPurchase = await CementPurchaseService.getCementPurchaseById(id);
      res.json(cementPurchase);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get cement purchase' });
    }
  }

  static async getAllCementPurchases(req, res) {
    try {
      const cementPurchases = await CementPurchaseService.getAllCementPurchases();
      res.json(cementPurchases);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get cement purchase' });
    }
  }

  static async updateCementPurchase(req, res) {
    try {
      const { id } = req.params;
      const updatedCementPurchase = await CementPurchaseService.updateCementPurchase(id, req.body);
      res.json(updatedCementPurchase);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update cement purchase' });
    }
  }

  static async deleteCementPurchase(req, res) {
    try {
      const { id } = req.params;
      await CementPurchaseService.deleteCementPurchase(id);
      res.json({ message: 'Cement purchase deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete cement purchase' });
    }
  }
}

module.exports = CementPurchaseController;
