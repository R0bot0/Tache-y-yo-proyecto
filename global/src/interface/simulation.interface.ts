export interface SimulationResponse {
  kml: File;
}

export interface SimulationDataConverted {
  coordsRed?: number[][];
  coordsOrange?: number[][];
  coordsYellow?: number[][];
}

export interface SimulationSave {
  scenarioId: number;
  elementId: number;
  lat: number;
  long: number;
}

export interface RebuildData {
  lat: number;
  long: number;
  prediction: string;
  element: number;
  scenario: number;
}

export interface InputVariables {
  direction: string;
  headquarter: string;
  stationControl: string;
  windSpeed: number;
  windFrom: string;
  humidity: number;
  airTemp: number;
  cloudiness: number;
  roughness: string;
  location: string;
  lat: number;
  long: number;
}

export interface SpecificVariables {
  substance: string;
  scenario: string;
  [key: string]: any;
}

export interface SimulatorForm extends InputVariables, SpecificVariables {}

export interface RunSimulationData {
  wind_speed: number;
  wind_direction: string;
  humidity: number;
  air_temp: number;
  cloud_cover: number;
  ground_roughness: string;
  location: string;
  lat: number;
  long: number;
  elementId: number;
  scenarioId: number;
  [key: string]: any;
}

export interface RiskMapResponse {
  simulationId: number;
  element: number;
  scenario: number;
  idUser: number;
  prediction: string;
  lat: number;
  long: number;
  createdAt: string;
  description: string;
  visibility: string;
  savedAt: string;
  name: string;
}

export interface RiskMapListResponse {
  data: RiskMapResponse[];
}
