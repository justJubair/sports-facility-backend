import { Schema, model } from 'mongoose';
import { IFacility } from './facility.interface';

const facilitySchema = new Schema<IFacility>(
  {
    name: { type: String },
    description: { type: String },
    pricePerHour: { type: Number },
    location: { type: String },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  },
);

export const FacilityModel = model<IFacility>('Facility', facilitySchema);
