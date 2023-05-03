export interface Facility {
  id: number;
  name: string;
  address: string;
  totalContructedArea: number;
  totalFreeArea: number;
  arl: string;
  companyId: number;
  riskCategory: number;
  totalPermanentEmployees: number;
  totalTemporaryEmployees: number;
  totalContractors: number;
  sensitiveBioticArea: number;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
}

export type FacilityCreate = Omit<Facility, "id" | "createdAt" | "updatedAt">;

export type FacilityUpdate = Omit<Facility, "createdAt" | "updatedAt">;
