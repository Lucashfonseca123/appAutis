import { AccreditationActions, IAccreditationTypes } from "../types/AccreditationActionTypes";
import { ISetUser, ISetTotalStage } from "../types/AccreditationPayloadTypes";

export interface IAccreditationBaseAction {
    type: IAccreditationTypes;
    payload?: ISetUser | ISetTotalStage;
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

export function setUser(payload: ISetUser): IAccreditationAction {
    return {
        type: AccreditationActions.SET_USER,
        payload
    };
}

export function setStatus(): ISetStatus {
    return {
        type: AccreditationActions.SET_STATUS
    }
}

export function setDecrementStage(): ISetStatus {
    return {
        type: AccreditationActions.SET_DECREMENT_STAGE
    }
}

export function setTotalStage(payload: ISetTotalStage): ISetTotalStages {
    return {
        type: AccreditationActions.SET_TOTAL_STAGE,
        payload
    }
}