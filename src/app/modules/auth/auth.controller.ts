import httpStatus from 'http-status';
import { catchAsync, sendResponseWithToken } from '../../util';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { _id, name, email, role, phone, address } = result.isUserExists;

  sendResponseWithToken(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    token: result.accessToken,
    data: { _id, name, email, role, phone, address },
  });
});

export const AuthControllers = {
  loginUser,
};
