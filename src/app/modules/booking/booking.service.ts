import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { FacilityModel } from '../facility/facility.model';
import { UserModel } from '../user/user.model';
import { IBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (payload: IBooking) => {
  try {
    const choosenFacility = await FacilityModel.findById(payload?.facility);

    // const currentUser = await UserModel.findById(payload?.user);

    if (!choosenFacility) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Facitly or User not found 😡',
      );
    }
    const pricePerHour = choosenFacility?.pricePerHour;

    const startTime = new Date(`${payload?.date}T${payload?.startTime}:00`);
    const endTime = new Date(`${payload?.date}T${payload?.endTime}:00`);

    const hourseDifference =
      (Number(endTime) - Number(startTime)) / (1000 * 60 * 60);

    const payableAmount = hourseDifference * Number(pricePerHour);
    if (payableAmount) {
      payload.payableAmount = payableAmount;
    }

    payload.isBooked = 'confirmed';
    payload.user = '1234';
    const result = await BookingModel.create(payload);
    return result;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'oopsie, error happend 😅');
  }
};

const getAllBookingsFromDB = async () => {
  const result = await BookingModel.find();
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
