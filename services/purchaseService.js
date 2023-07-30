const Purchase = require('../models/purchase');

class PurchaseService {
  static async createPurchase(data) {
    try {
      const purchase = await Purchase.create(data);
      return purchase;
    } catch (error) {
      throw new Error('Failed to create purchase');
    }
  }

  static async getPurchaseById(id) {
    try {
      const purchase = await Purchase.findByPk(id);
      return purchase;
    } catch (error) {
      throw new Error('Failed to get purchase');
    }
  }

  static async updatePurchase(id, data) {
    try {
      const purchase = await Purchase.findByPk(id);
      if (purchase) {
        await purchase.update(data);
        return purchase;
      }
      throw new Error('Purchase not found');
    } catch (error) {
      throw new Error('Failed to update purchase');
    }
  }

  static async deletePurchase(id) {
    try {
      const purchase = await Purchase.findByPk(id);
      if (purchase) {
        await purchase.destroy();
        return;
      }
      throw new Error('Purchase not found');
    } catch (error) {
      throw new Error('Failed to delete purchase');
    }
  }

  static async getAllPurchases() {
    try {
      const purchases = await Purchase.findAll();
      return purchases;
    } catch (error) {
      throw new Error('Failed to get purchases');
    }
  }
}

module.exports = PurchaseService;
