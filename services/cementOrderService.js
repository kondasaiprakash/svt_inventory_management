// services/cementOrderService.js

const { CementOrder } = require('../models/cementOrder');
const { CementStockService } = require('../services/cementStockService');

class CementOrderService {
  static async createCementOrder(cementOrderData) {
    try {
      const cementOrder = await CementOrder.create(cementOrderData);
      return cementOrder;
    } catch (error) {
      throw new Error('Failed to create cement order.');
    }
  }

  static async getCementOrderById(cementOrderId) {
    try {
      const cementOrder = await CementOrder.findByPk(cementOrderId);
      return cementOrder;
    } catch (error) {
      throw new Error('Failed to get cement order by ID.');
    }
  }

  static async getAllCementOrders() {
    try {
      const cementOrders = await CementOrder.findAll();
      return cementOrders;
    } catch (error) {
      throw new Error('Failed to get all cement orders.');
    }
  }

  static async updateCementOrder(cementOrderId, updatedData) {
    try {
      const cementOrder = await CementOrder.findByPk(cementOrderId);
      if (!cementOrder) {
        throw new Error('Cement order not found.');
      }
      await cementOrder.update(updatedData);
      return cementOrder;
    } catch (error) {
      throw new Error('Failed to update cement order.');
    }
  }

  static async removeCement(order)
  {
    try {
        // Find all cement orders associated with the order ID
        const cementOrders = await CementOrder.findAll({
          where: {
            orderId: order.id
          }
        });
    
        // Update the cement stock for each cement order
        for (const cementOrder of cementOrders) {
          CementStockService.removeCementStock(cementOrder);
        }
    
        console.log('cement stock updated successfully.');
      } catch (error) {
        console.error('Error updating cement stock:', error);
      }
  }

  static async deleteCementOrder(cementOrderId) {
    try {
      const cementOrder = await CementOrder.findByPk(cementOrderId);
      if (!cementOrder) {
        throw new Error('Cement order not found.');
      }
      await cementOrder.destroy();
      return true;
    } catch (error) {
      throw new Error('Failed to delete cement order.');
    }
  }
}

module.exports = CementOrderService;
