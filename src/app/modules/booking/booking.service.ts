import { IBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (payload: IBooking) => {
  const result = await BookingModel.create(payload);
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
