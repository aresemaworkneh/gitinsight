import User from '../models/User';
import { createUser } from './userControllers';

jest.mock('../models/User');

describe('createUser', () => {
  test('should create a new user', () => {
    const req = {
      body: {
        // Provide the necessary properties for creating a new user
      },
    };

    const res = {
      // Create a mock response object
    };

    const next = jest.fn();

    createUser(req, res, next);

    expect(User).toHaveBeenCalledTimes(1);
    expect(User).toHaveBeenCalledWith(req.body);
    expect(newUser.save).toHaveBeenCalledTimes(1);
    // Add more assertions as needed
  });
});