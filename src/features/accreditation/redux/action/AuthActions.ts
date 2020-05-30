import {
  AccreditationActions,
  IAccreditationTypes,
} from '../types/AccreditationActionTypes';
import {
  ISetUser,
  ISetTotalStage,
  ICreateUserSuccess,
  ICreateUserError
} from '../types/AccreditationPayloadTypes';

export interface IAccreditationBaseAction {
  type: IAccreditationTypes;
  payload?: ISetUser | ISetTotalStage | ICreateUserSuccess | ICreateUserError;
}

export interface IAccreditationAction extends IAccreditationBaseAction {
  type: IAccreditationTypes;
  payload: ISetUser;
}

export interface ISetStatus extends IAccreditationBaseAction {
  type: IAccreditationTypes;
}
export interface ISetDecrementStage extends IAccreditationBaseAction {
  type: IAccreditationTypes;
}
export interface ISetTotalStages extends IAccreditationBaseAction {
  type: IAccreditationTypes;
  payload: ISetTotalStage;
}

export interface ICreateUserGmail extends IAccreditationBaseAction {
  type: IAccreditationTypes;
}
export interface ICreateUserGmailSuccess extends IAccreditationBaseAction {
  type: IAccreditationTypes;
  payload: ICreateUserSuccess;
}
export interface ICreateUserGmailErrored extends IAccreditationBaseAction {
  type: IAccreditationTypes;
  payload: ICreateUserError;
}

export function setUser(payload: ISetUser): IAccreditationAction {
  return {
    type: AccreditationActions.SET_USER,
    payload
  };
}

export function setStatus(): ISetStatus {
  return {
    type: AccreditationActions.SET_STATUS
  };
}

export function setDecrementStage(): ISetStatus {
  return {
    type: AccreditationActions.SET_DECREMENT_STAGE
  };
}

export function setTotalStage(payload: ISetTotalStage): ISetTotalStages {
  return {
    type: AccreditationActions.SET_TOTAL_STAGE,
    payload
  };
}

export function loginRequest(): ICreateUserGmail {
  return {
    type: AccreditationActions.LOGIN_REQUEST,
  };
}

export function loginRequestSuccess(
  payload: ICreateUserSuccess
): ICreateUserGmailSuccess {
  return {
    type: AccreditationActions.LOGIN_REQUEST_SUCCESS,
    payload
  };
}

export function loginRequestErrored(
  payload: ICreateUserError
): ICreateUserGmailErrored {
  return {
    type: AccreditationActions.LOGIN_REQUEST_ERRORED,
    payload
  };
}
