const logger = require('../config/logger');
const bankAccountService = require('../services/bankAccountService');
const userService = require('../services/userService');
const companyService = require('../services/companyService');


class BankAccountController {
  // Create a new bank account
  async createBankAccount(req, res) {
    try {
      const bankAccountData = req.body;
      const params = JSON.parse(JSON.stringify(req.params));
      // logger.info(`params : ${params}`);
      const bankAccount = await bankAccountService.createBankAccount(bankAccountData);
      if('userId' in req.params)
      {
        userService.updateBankAccount(req.params.userId, bankAccount);
      }
      else
      {
        companyService.updateBankAccount(req.params.companyId, bankAccount);
      }
      
      res.status(201).json({ bankAccount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a bank account by ID
  async getBankAccountById(req, res) {
    try {
      const { id } = req.params;
      const bankAccount = await bankAccountService.getBankAccountById(id);
      res.json({ bankAccount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all bank accounts
  async getBankAccounts(req, res) {
    try {
      const bankAccounts = await bankAccountService.getBankAccounts();
      res.json({ bankAccounts });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update a bank account
  async updateBankAccount(req, res) {
    try {
      const { id } = req.params;
      const { accountNo, ifscCode } = req.body;
      const bankAccount = await bankAccountService.updateBankAccount(id, accountNo, ifscCode);
      res.json({ bankAccount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete a bank account
  async deleteBankAccount(req, res) {
    try {
      const { id } = req.params;
      await bankAccountService.deleteBankAccount(id);
      res.json({ message: 'Bank account deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BankAccountController;
