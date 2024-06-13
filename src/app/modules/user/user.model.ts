import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    phone: { type: Number, required: true },
    role: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<IUser>('User', userSchema);
