const express = require('express');
const logger = require('../config/logger')
const userController = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

router.delete('/', userController.dropTables);

module.exports = router;
