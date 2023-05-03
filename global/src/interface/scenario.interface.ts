import { DynamicInput } from "./form.interface";

export interface Scenario {
  scenarioId: number;
  ref: string;
  description: string;
}

export interface ScenarioDescription {
  scenarioId: number;
  description: string;
}

export type ScenarioResponse = DynamicInput[];
