import httpStatus from 'http-status';
import { catchAsync, sendResponse } from '../../util';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(
    req?.body,
    req.userCredentials,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created Successfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrived all bookings Successfully',
    data: result,
  });
});

const getUserSpecificBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getUserSpecificBookingsFromDB(
    req?.userCredentials.userEmail,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrived bookings Successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBookings,
  getUserSpecificBookings,
};
