import { IFacility } from './facility.interface';
import { FacilityModel } from './facility.model';

const createFacilityIntoDB = async (payload: IFacility) => {
  const result = await FacilityModel.create(payload);
  return result;
};

export const FacilityServices = {
  createFacilityIntoDB,
};
