const logger = require('../config/logger');
const SteelStock = require('../models/steelStock');

class SteelStockService {
  static async createSteelStock(stockData) {
    try {
      const steelStock = await SteelStock.create(stockData);
      return steelStock;
    } catch (error) {
      throw error;
    }
  }

  static async getSteelStockById(stockId) {
    try {
      const steelStock = await SteelStock.findByPk(stockId);
      return steelStock;
    } catch (error) {
      throw error;
    }
  }

  static async getAllSteelStocks() {
    try {
      const steelStocks = await SteelStock.findAll();
      return steelStocks;
    } catch (error) {
      throw error;
    }
  }

  static async addSteelStock(brandId, steelPurchase){
    try{
        const steelStock = await SteelStock.findOne({
            where: {
              brandId: brandId,
              steelCategoryId: steelPurchase.steelTypeId
            }
          });

          if (steelStock) {
            const currentQuantity = steelStock.quantity;
            steelStock.quantity = currentQuantity + steelPurchase.quantity;
            steelStock.price = steelPurchase.price;
            await steelStock.save();
          }
          else{
            const steelStockData = {
                'quantity' : steelPurchase.quantity,
                'price' : steelPurchase.price,
                'brandId' : brandId,
                'steelCategoryId' : steelPurchase.steelTypeId
            };
            await SteelStockService.createSteelStock(steelStockData);
          }
    }
    catch(error)
    {
        logger.error(error);
        throw error;
    }
  }

  static async removeSteelStock(steelOrder){
    try{
        const steelStock = await SteelStock.findOne({
            where: {
              brandId: steelOrder.brandId,
              steelCategoryId: steelOrder.steelCategoryId
            }
          });

          if (steelStock) {
            const currentQuantity = steelStock.quantity;
            steelStock.quantity = currentQuantity - steelOrder.quantity;
            await steelStock.save();
          }
        }
    catch(error)
    {
        logger.error(error);
        throw error;
    }
  }

  static async updateSteelStock(stockId, stockData) {
    try {
      const steelStock = await SteelStock.findByPk(stockId);
      if (steelStock) {
        await steelStock.update(stockData);
        return steelStock;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSteelStock(stockId) {
    try {
      const steelStock = await SteelStock.findByPk(stockId);
      if (steelStock) {
        await steelStock.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SteelStockService;
