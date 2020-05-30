export interface ISetUser {
  name: string;
  status: number;
}
export interface ISetTotalStage {
  totalStage: number;
}

export interface ICreateUserSuccess {
  id: string;
  name: string | null;
  status: number;
  currentStage: object[];
}
export interface ICreateUserError {
  error: string;
}
