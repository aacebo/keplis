import { UserOrigin } from '../enums';

export interface IUser {
  readonly _id: string;
  readonly origin?: UserOrigin;
  image?: string;
  username: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  readonly createdAt: Date;
  updatedAt?: Date;
  removedAt?: Date;
}
