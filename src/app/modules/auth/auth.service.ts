import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

const loginUser = async (payload: ILoginUser) => {
  // checking if the user exist
  const isUserExists = await UserModel.findOne({ email: payload.email });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not find');
  }

  // check password
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
  }

  // Access Token, refresh token

  // create token and send to client
  const jwtPayload = {
    userEmail: isUserExists?.email,
    userRole: isUserExists?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  return {
    accessToken,
    isUserExists,
  };
};

export const AuthServices = {
  loginUser,
};
