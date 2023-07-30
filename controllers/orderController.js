// controllers/orderController.js

const OrderService = require('../services/orderService');

class OrderController {
  static async createOrder(req, res) {
    const { userId, totalAmount, amountPending, paymentType } = req.body;

    try {
      const order = await OrderService.createOrder(userId, totalAmount, amountPending, paymentType);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  }

  static async getOrder(req, res) {
    const { orderId } = req.params;

    try {
      const order = await OrderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get order' });
    }
  }

  static async updateOrder(req, res) {
    const { orderId } = req.params;
    const updatedData = req.body;

    try {
      const order = await OrderService.updateOrder(orderId, updatedData);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update order' });
    }
  }

  static async deleteOrder(req, res) {
    const { orderId } = req.params;

    try {
      const order = await OrderService.deleteOrder(orderId);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete order' });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get orders' });
    }
  }

  // Add more controller methods as needed...

}

module.exports = OrderController;
