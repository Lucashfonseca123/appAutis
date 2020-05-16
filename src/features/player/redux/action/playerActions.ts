import { IPlayerActionsTypes, PlayerActions } from "../types/PlayerActionTypes";
import { ISetAnswer, IGetInfos, ISetProgress, ISetInitialState } from "../types/PlayerPayloadTypes";

export interface IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload?: ISetAnswer
    | IGetInfos
    | ISetProgress
    | ISetInitialState
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

export interface ISetInititalStage extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetInitialState
}

export interface IResetDone extends IPlayerBaseActions {
    type: IPlayerActionsTypes
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

export const setInitialStatePlayer = (payload: ISetInitialState): ISetInititalStage => {
    return {
        type: PlayerActions.SET_INITAL_STATE_PLAYER,
        payload
    }
}

export const setInitialStateMenu = (payload: ISetInitialState): ISetInititalStage => {
    return {
        type: PlayerActions.SET_INITAL_STATE_MENU,
        payload
    }
}

export const resetDone = (): IResetDone => {
    return {
        type: PlayerActions.RESET_DONE
    }
}