import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  // checking if the user exist
  const isUserExists = await UserModel.findOne({ email: payload.email });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not find');
  }
};

export const AuthServices = {
  loginUser,
};
