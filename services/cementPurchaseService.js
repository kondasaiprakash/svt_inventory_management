const CementPurchase = require('../models/cementPurchase');
const Purchase = require('../models/purchase');
const CementCategory = require('../models/cementCategory');
const cementStockService = require('./cementStockService');
const PurchaseService = require('./purchaseService')

class CementPurchaseService {
  static async createCementPurchase(data) {
    try {
      const cementPurchase = await CementPurchase.create(data);
      const purchase = await PurchaseService.getPurchaseById(cementPurchase.purchaseId);
      await cementStockService.addCementStock(purchase.brandId,cementPurchase);
      return cementPurchase;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create cement purchase');
    }
  }

  static async getCementPurchaseById(id) {
    try {
      const cementPurchase = await CementPurchase.findOne({
        where: { id },
        // include: [Purchase, CementCategory],
      });
      return cementPurchase;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get cement purchase');
    }
  }

  static async getAllCementPurchases() {
    try {
      const cementPurchases = await CementPurchase.findAll();
      return cementPurchases;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get cement purchases');
    }
  }

  static async updateCementPurchase(id, data) {
    try {
      const cementPurchase = await CementPurchase.findByPk(id);
      if (!cementPurchase) {
        throw new Error('Cement purchase not found');
      }
      await cementPurchase.update(data);
      return cementPurchase;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update cement purchase');
    }
  }

  static async deleteCementPurchase(id) {
    try {
      const cementPurchase = await CementPurchase.findByPk(id);
      if (!cementPurchase) {
        throw new Error('Cement purchase not found');
      }
      await cementPurchase.destroy();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete cement purchase');
    }
  }
}

module.exports = CementPurchaseService;
