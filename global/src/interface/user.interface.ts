export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  isActive: boolean;
  companyId: number;
  roleId: number;
  email: string;
  phone: string;
  identification: string;
  identificationType: number;
  address: string;
  jobTitle: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserCreate {
  firstName: string;
  lastName: string;
  password: string;
  companyId: number;
  roleId: number;
  email: string;
  phone: string;
  identification: string;
  identificationType: number;
  address: string;
  jobTitle: string;
}

export interface UserUpdate {
  id: number;
  firstName: string;
  lastName: string;
  companyId: number;
  roleId: number;
  email: string;
  phone: string;
  identification: string;
  identificationType: number;
  address: string;
  jobTitle: string;
}

export interface UserPasswordUpdate {
  userId: number;
  password: string;
  newPassword: string;
}
