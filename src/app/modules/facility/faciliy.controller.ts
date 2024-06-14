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

const updateFacility = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const result = await FacilityServices.updateFacilityIntoDB(id, req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility is updated successfully',
    data: result,
  });
});

export const FacilityControllers = {
  createFacility,
  updateFacility,
};
