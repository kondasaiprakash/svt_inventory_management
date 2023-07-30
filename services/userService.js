const User = require('../models/user');
const BankAccount = require("../models/bankAccount")
const logger = require('../config/logger');
class UserService {
  async createUser(userData) {
    try {
      const user = await User.create(userData);
      logger.info(user);
      return user;
    } catch (error) {
      logger.error(error)
      throw error;
    }
  }

  async createUserWithBank(userData, bankAccountData)
  {
    const transaction = await sequelize.transaction();
    try{
      const bankAccount = await BankAccount.create(bankAccountData)

      const user = await this.createUser( 
        {
          ...userData,
          bankAccountId : bankAccount.id
        },
        {transaction}
        );
  
        await transaction.commit()
        return {user, bankAccount}
  
    }
    catch(error){
      await transaction.rollback();
      throw error;
    }
    
  }

  async updateBankAccount(userid, bankAccount)
  {
      const user = await this.getUserById(userid);
      user.bankAccountId = bankAccount.id;
      user.save()
      return
  }

  async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      await User.update(userData, {
        where: { id },
      });
      const updatedUser = await User.findByPk(id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await User.findByPk(id);
      await User.destroy({
        where: { id },
      });
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
