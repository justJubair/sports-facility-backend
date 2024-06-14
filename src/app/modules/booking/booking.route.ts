import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createBookingValidationSchema } from './booking.validation';
import auth from '../../middlewares/auth';
import { User_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-booking',
  validateRequest(createBookingValidationSchema),
  BookingControllers.createBooking,
);

router.get('/', auth(User_ROLE.admin), BookingControllers.getAllBookings);
export const BookingRoutes = router;
