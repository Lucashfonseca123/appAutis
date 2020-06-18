export interface IPlayerState {
  id: number;
  type: string;
  alternatives: object | string[];
  done: boolean;
  answer: string;
  answered: string;
}

export interface IMenuState {
  type: object[];
  currentStage: object[];
}
