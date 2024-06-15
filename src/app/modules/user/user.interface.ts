import { User_ROLE } from './user.constant';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
}

export type TUserRole = keyof typeof User_ROLE;
