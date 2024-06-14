import { Types } from 'mongoose';

export interface IBooking {
  date: String;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  // user: String;
  facility: Types.ObjectId;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}
