import express from 'express';
import { Logout, getUserProfile, loginUser, registerUser } from '../controllers/userController.js';
import { validateUserLogin, validateUserRegistration } from '../validators/userValidator.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const usersRouter = express.Router();


// usersRouter.route('/')

usersRouter.post('/register-user', validateUserRegistration, registerUser);
usersRouter.post('/login-user', validateUserLogin, loginUser);
usersRouter.get('/get-user-profile', authenticate, getUserProfile);
usersRouter.post('/logout', Logout);

export default usersRouter;