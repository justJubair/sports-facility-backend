import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<IUser>('User', userSchema);
