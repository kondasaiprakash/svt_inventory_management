// routes/paymentRoutes.js

const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

router.post('/', PaymentController.createPayment);
router.get('/:paymentId', PaymentController.getPaymentById);
router.get('/', PaymentController.getAllPayments);
router.put('/:paymentId', PaymentController.updatePayment);
router.delete('/:paymentId', PaymentController.deletePayment);

module.exports = router;
