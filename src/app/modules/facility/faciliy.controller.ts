import httpStatus from 'http-status';
import { catchAsync, sendResponse } from '../../util';
import { FacilityServices } from './facility.service';

const createFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.createFacilityIntoDB(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility created successfully',
    data: result,
  });
});

export const FacilityControllers = {
  createFacility,
};
