const SteelPurchase = require('../models/steelPurchase');
const SteelStockService = require('./steelStockService');
const purchaseService = require('./purchaseService');
const PurchaseService = require('./purchaseService');

class SteelPurchaseService {
  static async createSteelPurchase(data) {
    try {
      const steelPurchase = await SteelPurchase.create(data);
      const purchase = await PurchaseService.getPurchaseById(steelPurchase.purchaseId);
      await SteelStockService.addSteelStock(purchase.brandId,steelPurchase);
      return steelPurchase;
    } catch (error) {
      throw new Error('Failed to create steel purchase');
    }
  }

  static async getSteelPurchaseById(id) {
    try {
      const steelPurchase = await SteelPurchase.findByPk(id);
      return steelPurchase;
    } catch (error) {
      throw new Error('Failed to retrieve steel purchase');
    }
  }

  static async updateSteelPurchase(id, data) {
    try {
      const steelPurchase = await SteelPurchase.findByPk(id);
      if (steelPurchase) {
        await steelPurchase.update(data);
        return steelPurchase;
      }
      throw new Error('Steel purchase not found');
    } catch (error) {
      throw new Error('Failed to update steel purchase');
    }
  }

  static async deleteSteelPurchase(id) {
    try {
      const steelPurchase = await SteelPurchase.findByPk(id);
      if (steelPurchase) {
        await steelPurchase.destroy();
        return true;
      }
      throw new Error('Steel purchase not found');
    } catch (error) {
      throw new Error('Failed to delete steel purchase');
    }
  }

  static async getAllSteelPurchases() {
    try {
      const steelPurchases = await SteelPurchase.findAll();
      return steelPurchases;
    } catch (error) {
      throw new Error('Failed to retrieve steel purchases');
    }
  }
}

module.exports = SteelPurchaseService;
