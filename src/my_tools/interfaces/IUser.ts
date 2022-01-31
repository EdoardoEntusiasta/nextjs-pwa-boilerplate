import { IUserCertification } from "./IUserCertification";



export interface IUser {
  name?: string;
  surname?: string;
  birthdate?: string;
  certifications: Array<IUserCertification>;
}