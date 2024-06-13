import express from 'express';
import { FacilityControllers } from './faciliy.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createFacilityValidationSchema } from './facility.validation';
const router = express.Router();

router.post(
  '/create-facility',
  validateRequest(createFacilityValidationSchema),
  FacilityControllers.createFacility,
);

export const FacilityRoutes = router;
