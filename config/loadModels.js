const BankAccount  = require('../models/bankAccount')
const User = require('../models/user')
const Company = require('../models/company')
const  Brand = require('../models/brand')
const  SteelCategory = require('../models/steelCategory')
const  CementCategory  = require('../models/cementCategory')
const  Purchase  = require('../models/purchase')
const  SteelPurchase  = require('../models/steelPurchase')
const  CementPurchase  = require('../models/cementPurchase')
const  SteelStock  = require('../models/steelStock')
const  CementStock = require('../models/cementStock')
const  { Order } = require('../models/order')
const  SteelOrder = require('../models/steelOrder')
const  CementOrder  = require('../models/cementOrder')
const Payment = require('../models/payment')
const logger = require('./logger')


  async function syncModels() {
    try {
      await BankAccount.sync();
      await Company.sync();
      await User.sync();
      await Brand.sync();
      await SteelCategory.sync();
      await CementCategory.sync();
      await Purchase.sync();
      await SteelPurchase.sync();
      await CementPurchase.sync();
      await SteelStock.sync();
      await CementStock.sync();
      await Order.sync();
      await SteelOrder.sync();
      await CementOrder.sync();
      await Payment.sync();
  
      console.log('Models synced successfully');
    } catch (error) {
      console.error('Error syncing models:', error);
    }
  }


module.exports = {
    syncModels
}