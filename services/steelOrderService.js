// services/steelOrderService.js

const { SteelOrder } = require('../models/steelOrder');
const SteelStockService = require('./steelStockService');

class SteelOrderService {
  static async createSteelOrder(data) {
    try {
      const steelOrder = await SteelOrder.create(data);
      return steelOrder;
    } catch (error) {
      throw new Error('Failed to create steel order.');
    }
  }

  static async getSteelOrderById(id) {
    try {
      const steelOrder = await SteelOrder.findByPk(id);
      return steelOrder;
    } catch (error) {
      throw new Error('Failed to retrieve steel order.');
    }
  }

  static async getAllSteelOrders() {
    try {
      const steelOrders = await SteelOrder.findAll();
      return steelOrders;
    } catch (error) {
      throw new Error('Failed to retrieve steel orders.');
    }
  }

  static async updateSteelOrder(id, data) {
    try {
      const steelOrder = await SteelOrder.findByPk(id);
      if (!steelOrder) {
        throw new Error('Steel order not found.');
      }
      await steelOrder.update(data);
      return steelOrder;
    } catch (error) {
      throw new Error('Failed to update steel order.');
    }
  }

  static async removeSteel(order)
  {
    try {
        // Find all steel orders associated with the order ID
        const steelOrders = await SteelOrder.findAll({
          where: {
            orderId: order.id
          }
        });
    
        // Update the steel stock for each steel order
        for (const steelOrder of steelOrders) {
          SteelStockService.removeSteelStock(steelOrder);
        }
    
        console.log('Steel stock updated successfully.');
      } catch (error) {
        console.error('Error updating steel stock:', error);
      }
  }

  static async deleteSteelOrder(id) {
    try {
      const steelOrder = await SteelOrder.findByPk(id);
      if (!steelOrder) {
        throw new Error('Steel order not found.');
      }
      await steelOrder.destroy();
      return true;
    } catch (error) {
      throw new Error('Failed to delete steel order.');
    }
  }
}

module.exports = SteelOrderService;