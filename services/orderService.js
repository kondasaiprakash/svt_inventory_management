// services/orderService.js

const { or } = require('sequelize');
const CementOrder = require('../models/cementOrder');
const { Order, OrderStatus } = require('../models/order');
const CementOrderService = require('./cementOrderService');
const SteelOrderService = require('./steelOrderService');

class OrderService {
  static async createOrder(orderData) {
    try {
      const order = await Order.create({
        orderData
      });
      return order;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  static async getOrderById(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      return order;
    } catch (error) {
      throw new Error('Failed to get order');
    }
  }

  static async addPayment(payment)
  {
    const order = OrderService.getOrderById(payment.orderId);
    const remainingAmount = order.pendingAmount - payment.amount;
    if(remainingAmount <= 0)
    {
      order.orderStatus = OrderStatus.COMPLETED
    }
    order.pendingAmount = remainingAmount;
    order.save()
    return order;
  }


  static async updateOrder(orderId, updatedData) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      currentStatus = order.orderStatus;
      if(currentStatus != updatedData.orderStatus && updatedData.orderStatus == OrderStatus.DELIVERED)
      {
        SteelOrderService.removeSteel(order);
        CementOrderService.removeCement(order);

      }
      await order.update(updatedData);
      return order;
    } catch (error) {
      throw new Error('Failed to update order');
    }
  }

  static async deleteOrder(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      await order.destroy();
      return order;
    } catch (error) {
      throw new Error('Failed to delete order');
    }
  }

  static async getAllOrders() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw new Error('Failed to get orders');
    }
  }

  // Add more methods as needed...

}

module.exports = OrderService;
