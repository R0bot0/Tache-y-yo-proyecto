import { Facility } from "./facility.interface";

export interface TechnicalResource {
  id: number;
  name: string;
  description: string;
  unit: string;
  quantityPublic: number;
  quantityPrivate: number;
  createdAt: Date;
  updatedAt: Date;
  facilityId: number;
  facility: Partial<Facility>;
}

export type TechnicalResourceCreate = Omit<
  TechnicalResource,
  "id" | "createdAt" | "updatedAt" | "facility"
>;

export type TechnicalResourceUpdate = Omit<
  TechnicalResource,
  "createdAt" | "updatedAt" | "facilityId" | "facility"
>;
