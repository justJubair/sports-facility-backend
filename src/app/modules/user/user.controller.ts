import httpStatus from 'http-status';
import { catchAsync, sendResponse } from '../../util';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req?.body);
  const { _id, name, email, role, phone, address } = result;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is registered succesfully',
    data: { _id, name, email, role, phone, address },
  });
});

export const UserContollers = {
  createUser,
};
