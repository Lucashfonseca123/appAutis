import { AccreditationActions, IAccreditationTypes } from "../types/AccreditationActionTypes";
import { ISetUser } from "../types/AccreditationPayloadTypes";

export interface IAccreditationBaseAction {
    type: IAccreditationTypes;
    payload?: ISetUser;
}

export interface IAccreditationAction extends IAccreditationBaseAction {
    type: IAccreditationTypes;
    payload: ISetUser;
}

export interface ISetStatus extends IAccreditationBaseAction {
    type: IAccreditationTypes;
}

export function setUser(payload: ISetUser): IAccreditationAction {
    return {
        type: AccreditationActions.SET_USER,
        payload
    };
}

export function setState(): ISetStatus {
    return {
        type: AccreditationActions.SET_STATUS
    }
}