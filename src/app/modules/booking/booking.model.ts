import { Schema, model } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>(
  {
    date: { type: Date },
    startTime: { type: String },
    endTime: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    facility: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'Facility',
    },
    isBooked: {
      type: String,
      enum: {
        values: ['confirmed', 'unconfirmed', 'canceled'],
        message: '{VALUE} is not valid',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const BookingModel = model<IBooking>('Booking', bookingSchema);
