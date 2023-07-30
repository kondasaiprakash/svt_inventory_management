// controllers/paymentController.js

const PaymentService = require('../services/paymentService');

class PaymentController {
  static async createPayment(req, res) {
    try {
      const { orderId, amount, paymentType } = req.body;
      const payment = await PaymentService.createPayment(orderId, amount, paymentType);
      res.status(201).json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getPaymentById(req, res) {
    try {
      const { paymentId } = req.params;
      const payment = await PaymentService.getPaymentById(paymentId);
      if (!payment) {
        return res.status(404).json({ success: false, error: 'Payment not found' });
      }
      res.status(200).json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getAllPayments(req, res) {
    try {
      const payments = await PaymentService.getAllPayments();
      res.status(200).json({ success: true, payments });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updatePayment(req, res) {
    try {
      const { paymentId } = req.params;
      const updates = req.body;
      const payment = await PaymentService.updatePayment(paymentId, updates);
      res.status(200).json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async deletePayment(req, res) {
    try {
      const { paymentId } = req.params;
      const payment = await PaymentService.deletePayment(paymentId);
      res.status(200).json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = PaymentController;
