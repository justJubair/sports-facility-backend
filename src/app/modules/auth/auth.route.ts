import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginValidation } from './auth.validation';
import { createUserValidationSchema } from '../user/user.validation';
import { UserContollers } from '../user/user.controller';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(createUserValidationSchema),
  UserContollers.createUser,
);

router.post(
  '/login',
  validateRequest(loginValidation),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
