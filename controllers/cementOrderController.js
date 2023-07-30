// controllers/cementOrderController.js

const CementOrderService = require('../services/cementOrderService');

class CementOrderController {
  static async createCementOrder(req, res, next) {
    try {
      const cementOrderData = req.body;
      const cementOrder = await CementOrderService.createCementOrder(cementOrderData);
      res.status(201).json(cementOrder);
    } catch (error) {
      next(error);
    }
  }

  static async getCementOrderById(req, res, next) {
    try {
      const { cementOrderId } = req.params;
      const cementOrder = await CementOrderService.getCementOrderById(cementOrderId);
      res.json(cementOrder);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCementOrders(req, res, next) {
    try {
      const cementOrders = await CementOrderService.getAllCementOrders();
      res.json(cementOrders);
    } catch (error) {
      next(error);
    }
  }

  static async updateCementOrder(req, res, next) {
    try {
      const { cementOrderId } = req.params;
      const updatedData = req.body;
      const updatedCementOrder = await CementOrderService.updateCementOrder(cementOrderId, updatedData);
      res.json(updatedCementOrder);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCementOrder(req, res, next) {
    try {
      const { cementOrderId } = req.params;
      await CementOrderService.deleteCementOrder(cementOrderId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CementOrderController;
