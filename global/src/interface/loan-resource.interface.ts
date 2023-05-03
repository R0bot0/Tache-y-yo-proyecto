import { TechnicalResource } from "./technical-resource.interface";
import { QualifiedStaff } from "./qualified-staff.interface";
import { Company } from "./company.interface";
import { User } from "./user.interface";

export interface LoanResource {
  id: number;
  resourceId: number;
  resourceType: string;
  resourceTypeUser?: string;
  status: string;
  mutualAidId: number;
  statusUser?: string;
  quantity: number;
  companyId: number;
  company?: Company;
  requestedById: number;
  requestedBy?: User;
  requestedAt: Date;
  approvedById: number;
  approvedBy?: User;
  approvedAt: Date;
  rejectedById: number;
  rejectedBy?: User;
  rejectedAt: Date;
  resource?: TechnicalResource | QualifiedStaff;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoanResourceCreate {
  resourceId: number;
  resourceType: string;
  quantity: number;
  mutualAidId: number;
}

export interface LoanResourceUpdate {
  id: number;
  resourceId: number;
  comment: string;
  resourceType: string;
  status: string;
  quantity: number;
}
