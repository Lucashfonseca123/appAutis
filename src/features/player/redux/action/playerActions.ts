import { IPlayerActionsTypes, PlayerActions } from "../types/PlayerActionTypes";
import { ISetAnswer, IGetInfos, ISetProgress } from "../types/PlayerPayloadTypes";

export interface IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload?: ISetAnswer
    | IGetInfos
    | ISetProgress
}

export interface ISetAnswers extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetAnswer
}
export interface ISetInitialAnswer extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
}
export interface IGetInfo extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: IGetInfos
}

export interface ISetProgressStage extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetProgress
}

export const setAnswer = (payload: ISetAnswer): ISetAnswers => {
    return {
        type: PlayerActions.SET_ANSWER,
        payload
    }
};

export const setInitialAnswer = (): ISetInitialAnswer => {
    return {
        type: PlayerActions.SET_INITIAL_ANSWER
    }
};

export const getInfos = (payload: IGetInfos): IGetInfo => {
    return {
        type: PlayerActions.GET_INFOS,
        payload
    }
}

export const setProgress = (payload: ISetProgress): ISetProgressStage => {
    return {
        type: PlayerActions.SET_PROGRESS,
        payload
    }
}