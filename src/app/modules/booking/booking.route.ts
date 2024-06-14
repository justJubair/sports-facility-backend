import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createBookingValidationSchema } from './booking.validation';
import auth from '../../middlewares/auth';
import { User_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/bookings',
  auth(User_ROLE.user),
  validateRequest(createBookingValidationSchema),
  BookingControllers.createBooking,
);

router.get(
  '/bookings',
  auth(User_ROLE.admin),
  BookingControllers.getAllBookings,
);

router.get(
  '/bookings/user',
  auth(User_ROLE.user),
  BookingControllers.getUserSpecificBookings,
);

router.delete(
  '/bookings/:id',
  auth(User_ROLE.user),
  BookingControllers.deleteBooking,
);

router.get('/check-availability', BookingControllers.getBookingAvailability);

export const BookingRoutes = router;
