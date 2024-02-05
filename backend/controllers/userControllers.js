const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
  console.log(req.body);
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get a single user

exports.getUserbyId = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
}
// Update a user
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
  res.json(user);

};

// Delete a user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: 'User deleted' });
};
