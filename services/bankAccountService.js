// Import the BankAccount model
const BankAccount = require('../models/bankAccount');

class BankAccountService {
  // Create a new bank account
  async createBankAccount(bankAccountData) {
    try {
      const bankAccount = await BankAccount.create(bankAccountData);
      return bankAccount;
    } catch (error) {
      throw new Error('Failed to create bank account');
    }
  }

  // get all bank accounts
  async getBankAccounts() {
    try {
      const bankAccounts = await BankAccount.findAll();
      return bankAccounts;
    } catch (error) {
      throw error;
    }
  }

  // Get a bank account by ID
  async getBankAccountById(id) {
    try {
      const bankAccount = await BankAccount.findByPk(id);
      return bankAccount;
    } catch (error) {
      throw new Error('Failed to retrieve bank account');
    }
  }

  // Update a bank account
  async updateBankAccount(id, accountNo, ifscCode) {
    try {
      const bankAccount = await BankAccount.findByPk(id);
      if (!bankAccount) {
        throw new Error('Bank account not found');
      }

      bankAccount.accountNo = accountNo;
      bankAccount.ifscCode = ifscCode;
      await bankAccount.save();

      return bankAccount;
    } catch (error) {
      throw new Error('Failed to update bank account');
    }
  }

  // Delete a bank account
  async deleteBankAccount(id) {
    try {
      const bankAccount = await BankAccount.findByPk(id);
      if (!bankAccount) {
        throw new Error('Bank account not found');
      }

      await bankAccount.destroy();

      return true;
    } catch (error) {
      throw new Error('Failed to delete bank account');
    }
  }
}

module.exports = new BankAccountService();
