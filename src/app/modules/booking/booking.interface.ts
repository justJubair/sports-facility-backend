import { Types } from 'mongoose';

export interface IBooking {
  date: Date;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount: Number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}
