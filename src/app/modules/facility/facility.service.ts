import { IFacility } from './facility.interface';
import { FacilityModel } from './facility.model';

const createFacilityIntoDB = async (payload: IFacility) => {
  const result = await FacilityModel.create(payload);
  return result;
};

const updateFacilityIntoDB = async (
  id: string,
  payload: Partial<IFacility>,
) => {
  const result = await FacilityModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteFacilityFromDB = async (id: string) => {
  const result = await FacilityModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  deleteFacilityFromDB,
};
