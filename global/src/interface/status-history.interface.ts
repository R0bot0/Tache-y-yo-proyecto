import { User } from "./user.interface";

export interface StatusHistory {
  id: number;
  entityId: number;
  entity: string;
  newStatus: string;
  newStatusUser?: string;
  oldStatus?: string;
  oldStatusUser?: string;
  comment?: string;
  createdById: number;
  createdBy?: User; 
  createdAt: Date;
}

export type LoanResourceStatusHistoryCreate = Omit<
  StatusHistory,
  "id" | "createdAt"
>;
