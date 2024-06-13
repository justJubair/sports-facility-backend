import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createUserValidationSchema } from './user.validation';
import { UserContollers } from './user.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(createUserValidationSchema),
  UserContollers.createUser,
);

export const UserRoutes = router;
