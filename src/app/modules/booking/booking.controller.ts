import httpStatus from 'http-status';
import { catchAsync, sendResponse } from '../../util';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created Successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
