import { Types } from 'mongoose';

export interface IBooking {
  date: Date;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  // user: String;
  facility: Types.ObjectId;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}
