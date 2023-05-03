import { Role } from "./role.interface";

export interface Permission {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    roles?: Role[];
  }