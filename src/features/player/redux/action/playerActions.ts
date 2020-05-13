import { IPlayerActionsTypes, PlayerActions } from "../types/PlayerActionTypes";
import { ISetAnswer, ISetMenu } from "../types/PlayerPayloadTypes";

export interface IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload?: ISetAnswer | ISetMenu
}

export interface ISetAnswers extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetAnswer
}
export interface ISetInitialAnswer extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
}

export interface ISetMenuOptions extends IPlayerBaseActions {
    type: IPlayerActionsTypes,
    payload: ISetMenu
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

export const setMenuOptions = (payload: ISetMenu): ISetMenuOptions => {
    return {
        type: PlayerActions.SET_MENU_OPTION,
        payload
    }
}