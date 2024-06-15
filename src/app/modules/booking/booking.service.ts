import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { FacilityModel } from '../facility/facility.model';
import { UserModel } from '../user/user.model';
import { IBooking } from './booking.interface';
import { BookingModel } from './booking.model';
import { getCurrentDate } from './booking.utils';
import { addMinutes } from '../../util';
import { default_endTime, default_startTime } from './booking.constant';

const createBookingIntoDB = async (payload: IBooking, userCredentials: any) => {
  const choosenFacility = await FacilityModel.findById(payload?.facility);

  const currentUser = await UserModel.findOne({
    email: userCredentials.userEmail,
  });

  if (!choosenFacility) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Facitly not found 😡');
  }
  if (!currentUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not found 😡');
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
  payload.user = currentUser._id;

  const result = await BookingModel.create(payload);
  return result;
};

const getAllBookingsFromDB = async () => {
  const result = await BookingModel.find();
  return result;
};

const getUserSpecificBookingsFromDB = async (email: string) => {
  const currentUser = await UserModel.findOne({ email: email });

  if (!currentUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  const result = await BookingModel.find({ user: currentUser?._id }).populate(
    'facility',
  );
  return result;
};

const deleteBookingFromDB = async (id: string) => {
  const result = await BookingModel.findByIdAndUpdate(
    id,
    { isBooked: 'canceled' },
    { new: true, runValidators: true },
  ).populate('facility');
  return result;
};

const getbookingAvailabilityFromDB = async (date: string | undefined) => {
  // if date is not given

  const currentDate = date || getCurrentDate();

  const result = await BookingModel.find({ date: currentDate });

  const generateTimeSlots = (start: string, end: string) => {
    const slots: string[] = [];
    let currentDate = start;

    while (currentDate < end) {
      const nextTime = addMinutes(currentDate, 30);
      slots.push(`${currentDate}-${nextTime}`);
      currentDate = nextTime;
    }

    return slots;
  };

  let allSlots = generateTimeSlots(default_startTime, default_endTime);

  result.forEach((booking) => {
    const bookingSlots = generateTimeSlots(booking.startTime, booking.endTime);
    allSlots = allSlots.filter((slot) => !bookingSlots.includes(slot));
  });

  // Convert available slots to the desired format
  const availableSlots = allSlots.map((slot) => {
    const [startTime, endTime] = slot.split('-');
    return { startTime, endTime };
  });

  return availableSlots;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getUserSpecificBookingsFromDB,
  deleteBookingFromDB,
  getbookingAvailabilityFromDB,
};
