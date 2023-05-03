import { ScenarioDescription } from "./scenario.interface";

export interface Substance {
  substanceId: number;
  name: string;
  scenarios: ScenarioDescription[];
}

export type SubstancesResponse = Substance[];

export interface SubstanceRequest {
  substanceId: number;
  scenarioId: number;
}
