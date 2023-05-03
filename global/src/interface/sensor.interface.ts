import { WeatherStationInfo } from "./weather.interface";

export interface Sensor {
  lsId: number;
  sensorType: number;
  dataStructureType: number;
  data: WeatherStationInfo
}

export interface SensorsResponse {
  stationId: number;
  sensors: Sensor[];
  generatedAt: number;
}
