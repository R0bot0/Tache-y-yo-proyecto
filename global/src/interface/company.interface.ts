import { Facility } from "./facility.interface";

export interface Company {
  id: number;
  name: string;
  address: string;
  nit: string;
  description: string;
  status: string;
  facilities: Facility[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyCreate {
  name: string;
  address: string;
  nit: string;
  description: string;
}

export interface CompanyUpdate {
  id: number;
  name: string;
  address: string;
  nit: string;
  description: string;
  status: string;
}

export interface CompanyResponse {
  name: string;
  direction: string;
  lat: number;
  long: number;
}

export interface CompaniesResponse {
  data: CompanyResponse[];
}
