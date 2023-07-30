// companyController.js

const Company = require('../models/company');

class CompanyController {
  static async getAllCompanies(req, res) {
    try {
      const companies = await Company.findAll();
      res.json(companies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getCompanyById(req, res) {
    const companyId = req.params.id;
    try {
      const company = await Company.findByPk(companyId);
      if (company) {
        res.json(company);
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createCompany(req, res) {
    const { name, address, email, phone } = req.body;
    try {
      const company = await Company.create({
        name,
        address,
        email,
        phone,
      });
      res.status(201).json(company);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateCompany(req, res) {
    const companyId = req.params.id;
    const { name, address, email, phone } = req.body;
    try {
      const company = await Company.findByPk(companyId);
      if (company) {
        await company.update({
          name,
          address,
          email,
          phone,
        });
        res.json(company);
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deleteCompany(req, res) {
    const companyId = req.params.id;
    try {
      const company = await Company.findByPk(companyId);
      if (company) {
        await company.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = CompanyController;
