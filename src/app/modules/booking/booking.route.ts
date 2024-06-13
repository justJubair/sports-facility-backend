import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createBookingValidationSchema } from './booking.validation';

const router = express.Router();

router.post(
  '/create-booking',
  validateRequest(createBookingValidationSchema),
  BookingControllers.createBooking,
);

export const BookingRoutes = router;
