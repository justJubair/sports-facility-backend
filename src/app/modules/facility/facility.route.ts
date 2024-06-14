import express from 'express';
import { FacilityControllers } from './faciliy.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createFacilityValidationSchema,
  updateFacilityValidationSchema,
} from './facility.validation';
import auth from '../../middlewares/auth';
import { User_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(User_ROLE.admin),
  validateRequest(createFacilityValidationSchema),
  FacilityControllers.createFacility,
);

router.put(
  '/:id',
  auth(User_ROLE.admin),
  validateRequest(updateFacilityValidationSchema),
  FacilityControllers.updateFacility,
);

router.delete(
  '/:id',
  auth(User_ROLE.admin),
  validateRequest(updateFacilityValidationSchema),
  FacilityControllers.deleteFacility,
);

router.get('/', FacilityControllers.getAllFacilities);

export const FacilityRoutes = router;
