export interface DynamicInput {
  name: string;
  label: string;
  type: NInputType;
  enableWhen?: EnableWhen;
  ranges?: Range[];
  fixedValue?: FixedValue;
  options?: Option[];
  isDependent: boolean;
  conditions?: Condition[];
  units?: string[];
}

export interface EnableWhen {
  dependencies: string[];
  condition: string;
}

export interface FixedValue {
  dependencies?: string[];
  is: string;
}

export interface Range {
  dependencies?: string[];
  condition?: string;
  are: RangeCondition;
}

export interface RangeCondition {
  min?: number;
  max?: number;
}

export interface Option {
  dependencies?: string[];
  condition?: string;
  are: string[];
}

export interface Condition {
  dependencies: string[];
  conditional: string;
}

export interface ValidationInput {
  controlName: string;
  type: NInputType;
  options?: string[];
  min?: number;
  max?: number;
}

export interface FormLabel {
  name: string;
  label: string;
  type: NInputType;
  units: string[];
}

type NInputType = any;
