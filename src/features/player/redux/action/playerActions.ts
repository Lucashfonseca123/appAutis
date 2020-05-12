import { IPlayerActionsTypes, PlayerActions } from "../types/PlayerActionTypes";
import { IGetAlternatives, ISetAnswer } from "../types/PlayerPayloadTypes";

export interface IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload?: IGetAlternatives | ISetAnswer
}

export interface ISetAnswers extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetAnswer
}

export interface IGetAlternativesScreen extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
}

export const setAnswer = (payload: ISetAnswer): ISetAnswers => {
    return {
        type: PlayerActions.SET_ANSWER,
        payload
    }
};

export const getAlternatives = (): IGetAlternativesScreen => {
    return {
        type: PlayerActions.GET_ALTERNATIVES
    }
};