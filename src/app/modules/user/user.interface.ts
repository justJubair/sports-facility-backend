import { User_ROLE } from './user.constant';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: number;
  role: string;
  address: string;
}

export type TUserRole = keyof typeof User_ROLE;
