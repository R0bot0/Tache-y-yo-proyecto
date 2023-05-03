import { Company } from "./company.interface";
import { Role } from "./role.interface";

export interface Login {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  companyId: number;
  roleId: number;
  email: string;
  phone: string;
  identification: string;
  identificationType: number;
  accessToken: string;
  role: Role;
  company: Company;
}

export interface LoginData {
  email: string;
  password: string;
}
