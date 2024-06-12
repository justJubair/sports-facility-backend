import { catchAsync } from '../../util';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req?.body);
  return result;
});

export const UserContollers = {
  createUser,
};
