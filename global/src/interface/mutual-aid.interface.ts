import { Facility } from "./facility.interface";
import { LoanResource } from "./loan-resource.interface";
import { User } from "./user.interface";
import { MutualAidScheme } from "./mutual-aid-scheme.interface";

export interface MutualAid {
    id: number;
    facilityId: number;
    facility?: Facility;
    loanResourceId: number;
    loanResource?: LoanResource;
    status: string;
    statusUser?: string;
    createdById: number;
    createdBy?: User;
    schemeId: number;
    scheme?: MutualAidScheme;
}

export interface MutualAidFindAllDto {
    status?: string;
    notStatus?: boolean;
    companyId?: string;
}

export interface MutualAidCreate {
    status: string;
    facilityId: number;
    schemeId: number;
    comment: string;
}

export interface MutualAidUpdate {
    id: number;
    status: string;
    facilityId: number;
    schemeId: number;
    comment: string;
}