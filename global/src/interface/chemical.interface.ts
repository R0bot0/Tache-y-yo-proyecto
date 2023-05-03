import { File } from "./file.interface";

export interface Chemical {
    id: number;
    name: string;
    casCode: string;
    files: File[];
    company?: {id: number, name: string};
}

export interface ChemicalCreate {
    name: string;
    casCode: string;
    companyId: number;
}

export interface ChemicalUpdate {
    id: number;
    name: string;
    casCode: string;
}