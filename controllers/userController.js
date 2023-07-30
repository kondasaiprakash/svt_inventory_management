const userService = require('../services/userService');
const { sequelize } = require('../config/database');
const logger = require('../config/logger');
class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      logger.info("user date from request is : ")
      logger.info(userData)
      const user = await userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userService.updateUser(id, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.deleteUser(id);
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async dropTables(req, res) {
    sequelize.drop().then(() => {
        res.json({'success': 'true'})
    }
        
    ).catch((error) => {
        res.status(500).json({error : 'failed to drop data'})
    });
  }
}

module.exports = new UserController();
