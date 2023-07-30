const PurchaseService = require('../services/purchaseService');

class PurchaseController {
  static async createPurchase(req, res) {
    try {
      const purchase = await PurchaseService.createPurchase(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPurchaseById(req, res) {
    try {
      const { id } = req.params;
      const purchase = await PurchaseService.getPurchaseById(id);
      res.json(purchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePurchase(req, res) {
    try {
      const { id } = req.params;
      const purchase = await PurchaseService.updatePurchase(id, req.body);
      res.json(purchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePurchase(req, res) {
    try {
      const { id } = req.params;
      await PurchaseService.deletePurchase(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllPurchases(req, res) {
    try {
      const purchases = await PurchaseService.getAllPurchases();
      res.json(purchases);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PurchaseController;
