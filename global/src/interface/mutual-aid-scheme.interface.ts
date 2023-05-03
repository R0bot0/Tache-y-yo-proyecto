export interface MutualAidScheme {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MutualAidSchemeCreate = Omit<
  MutualAidScheme,
  "id" | "createdAt" | "updatedAt"
>;

export type MutualAidSchemeUpdate = Omit<
  MutualAidScheme,
  "createdAt" | "updatedAt"
>;
