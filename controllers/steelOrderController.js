// controllers/steelOrderController.js

const SteelOrderService = require('../services/steelOrderService');

class SteelOrderController {
  static async createSteelOrder(req, res) {
    try {
      const steelOrder = await SteelOrderService.createSteelOrder(req.body);
      res.status(201).json({ success: true, data: steelOrder });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getSteelOrderById(req, res) {
    try {
      const { id } = req.params;
      const steelOrder = await SteelOrderService.getSteelOrderById(id);
      if (!steelOrder) {
        return res.status(404).json({ success: false, error: 'Steel order not found.' });
      }
      res.json({ success: true, data: steelOrder });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getAllSteelOrders(req, res) {
    try {
      const steelOrders = await SteelOrderService.getAllSteelOrders();
      res.json({ success: true, data: steelOrders });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updateSteelOrder(req, res) {
    try {
      const { id } = req.params;
      const steelOrder = await SteelOrderService.updateSteelOrder(id, req.body);
      res.json({ success: true, data: steelOrder });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async deleteSteelOrder(req, res) {
    try {
      const { id } = req.params;
      const deleted = await SteelOrderService.deleteSteelOrder(id);
      res.json({ success: true, deleted });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = SteelOrderController;
