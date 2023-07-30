const logger = require('../config/logger');
const CementStock = require('../models/cementStock');

class CementStockService {
  static async createCementStock(data) {
    try {
      const cementStock = await CementStock.create(data);
      return cementStock;
    } catch (error) {
      throw error;
    }
  }

  static async getCementStockById(id) {
    try {
      const cementStock = await CementStock.findByPk(id);
      return cementStock;
    } catch (error) {
      throw error;
    }
  }

  static async getAllCementStocks() {
    try {
      const cementStocks = await CementStock.findAll();
      return cementStocks;
    } catch (error) {
      throw error;
    }
  }

  static async updateCementStock(id, data) {
    try {
      const cementStock = await CementStock.findByPk(id);
      if (cementStock) {
        await cementStock.update(data);
        return cementStock;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async addCementStock(brandId, cementPurchase){
    try{
        const cementStock = await CementStock.findOne({
            where: {
              brandId: brandId,
              cementCategoryId: cementPurchase.cementTypeId
            }
          });

          if (cementStock) {
            const currentQuantity = cementStock.quantity;
            cementStock.quantity = currentQuantity + cementPurchase.quantity;
            cementStock.price = cementPurchase.price;
      
            await cementStock.save();
          }
          else{
            const cementStockData = {
                'quantity' : cementPurchase.quantity,
                'price' : cementPurchase.price,
                'brandId' : brandId,
                'cementCategoryId' : cementPurchase.cementTypeId
            };
            await CementStockService.createCementStock(cementStockData);
          }
    }
    catch(error)
    {
        logger.error(error);
        throw error;
    }
  }


  static async removeCementStock(brandId, cementOrder){
    try{
        const cementStock = await CementStock.findOne({
            where: {
              brandId: brandId,
              cementCategoryId: cementPurchase.cementTypeId
            }
          });

          if (cementStock) {
            const currentQuantity = cementStock.quantity;
            cementStock.quantity = currentQuantity - cementOrder.quantity;
            await cementStock.save();
          }
    }
    catch(error)
    {
        logger.error(error);
        throw error;
    }
  }


  static async deleteCementStock(id) {
    try {
      const cementStock = await CementStock.findByPk(id);
      if (cementStock) {
        await cementStock.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CementStockService;
