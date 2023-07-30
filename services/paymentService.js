// services/paymentService.js

const { Payment } = require('../models/payment');
const OrderService = require('../services/orderService');

class PaymentService {
  static async createPayment(paymentData) {
    try {
      const payment = await Payment.create({
        paymentData
      });
      OrderService.addPayment(payment);
      
      return payment;
    } catch (error) {
      throw new Error('Failed to create payment');
    }
  }

  static async getPaymentById(paymentId) {
    try {
      const payment = await Payment.findByPk(paymentId);
      return payment;
    } catch (error) {
      throw new Error('Failed to get payment');
    }
  }

  static async getAllPayments() {
    try {
      const payments = await Payment.findAll();
      return payments;
    } catch (error) {
      throw new Error('Failed to get payments');
    }
  }

  static async updatePayment(paymentId, updates) {
    try {
      const payment = await Payment.findByPk(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }

      await payment.update(updates);
      return payment;
    } catch (error) {
      throw new Error('Failed to update payment');
    }
  }

  static async deletePayment(paymentId) {
    try {
      const payment = await Payment.findByPk(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }

      await payment.destroy();
      return payment;
    } catch (error) {
      throw new Error('Failed to delete payment');
    }
  }
}

module.exports = PaymentService;
