import { Facility } from "./facility.interface";

export interface QualifiedStaff {
  id: number;
  name: string;
  qualifiedStaffCategoryId: number;
  address: string;
  phone: string;
  facilityId: number;
  facility?: Partial<Facility>;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type QualifiedStaffCreate = Omit<
  QualifiedStaff,
  "id" | "createdAt" | "updatedAt"
>;

export type QualifiedStaffUpdate = Omit<
  QualifiedStaff,
  "createdAt" | "updatedAt" | "facilityId"
>;
