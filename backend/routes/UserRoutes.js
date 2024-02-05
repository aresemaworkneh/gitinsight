const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

// Create user
router.post('/', userController.createUser);
// Get all users
router.get('/', userController.getAllUsers);
// Get user by id
router.get('/:id', userController.getUserbyId);
// Update user
router.put('/:id', userController.updateUser);
// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;



