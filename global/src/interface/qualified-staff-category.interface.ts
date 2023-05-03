export interface QualifiedStaffCategory {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export type QualifiedStaffCategoryCreate = Omit<
  QualifiedStaffCategory,
  "id" | "createdAt" | "updatedAt"
>;

export type QualifiedStaffCategoryUpdate = Omit<
  QualifiedStaffCategory,
  "createdAt" | "updatedAt"
>;
