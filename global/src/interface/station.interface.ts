import { Sensor } from "./sensor.interface";

export interface Station {
  stationId: number;
  name: string;
  gatewayId: number;
  gatewayIdHex: string;
  productNumber: string;
  username: string;
  userEmail: string;
  companyName: string;
  active: boolean;
  private: boolean;
  uploadInterval: number;
  firmwareVersion: number;
  imei: string;
  meid: string;
  registeredDate: number;
  subscriptionEndDate: number;
  timeZone: string;
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  elevation: number;
}

export interface StationModel {
  stationId: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface StationResponse {
  stationId: number;
  sensors: Sensor[];
  generatedAt: number;
}

export interface StationsResponse {
  stations: Station[];
  generatedAt: number;
}

export interface DistModel {
  stationName: string;
  dist: number;
}
