export interface MultiplyWithUsSteps {
  title: string;
  steps: {
    step_1: string;
    step_2: string;
  };
}

export interface MultiplyWithUsStepsWithID extends MultiplyWithUsSteps {
  id: number;
}

export type MultiplyWithUsData = MultiplyWithUsStepsWithID[];
