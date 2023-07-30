// companyService.js

const Company = require('../models/company');

class CompanyService {
  static async getAllCompanies() {
    try {
      const companies = await Company.findAll();
      return companies;
    } catch (error) {
      throw new Error('Error fetching companies');
    }
  }

  static async getCompanyById(id) {
    try {
      const company = await Company.findByPk(id);
      return company;
    } catch (error) {
      throw new Error('Error fetching company');
    }
  }

  static async createCompany(data) {
    try {
      const company = await Company.create(data);
      return company;
    } catch (error) {
      throw new Error('Error creating company');
    }
  }

  async updateBankAccount(companyId, bankAccount)
  {
      const company = await CompanyService.getCompanyById(companyId);
      company.bankAccountId = bankAccount.id;
      company.save()
      return
  }

  static async updateCompany(id, data) {
    try {
      const company = await Company.findByPk(id);
      if (company) {
        await company.update(data);
        return company;
      }
      return null;
    } catch (error) {
      throw new Error('Error updating company');
    }
  }

  static async deleteCompany(id) {
    try {
      const company = await Company.findByPk(id);
      if (company) {
        await company.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('Error deleting company');
    }
  }
}

module.exports = new CompanyService();
