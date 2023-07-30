const express = require('express');
const BankAccountController = require('../controllers/bankAccountController');

const bankAccountController = new BankAccountController();

const router = express.Router();

// Create a new bank account
router.post('/user/:userId', bankAccountController.createBankAccount);

router.post('/company/:companyId', bankAccountController.createBankAccount);

// Get all bank accounts
router.get('/', bankAccountController.getBankAccounts);

// Get a bank account by ID
router.get('/:id', bankAccountController.getBankAccountById);

// Update a bank account
router.put('/:id', bankAccountController.updateBankAccount);

// Delete a bank account
router.delete('/:id', bankAccountController.deleteBankAccount);

module.exports = router;
