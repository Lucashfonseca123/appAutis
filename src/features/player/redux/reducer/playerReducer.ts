import { IPlayerState } from "../types/PlayerStateTypes";
import { PlayerActions } from "../types/PlayerActionTypes";
import { IPlayerBaseActions } from "../action/playerActions";
import obj from "../../../../rules/rules.json";

let index = 0;

const initialState: IPlayerState = {
    id: 0,
    type: obj.menus[0].stage[index].type,
    alternatives: obj.menus[0].stage[index].alternative,
};

export default function (state = initialState, action: IPlayerBaseActions) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.GET_INFOS: {
            const { id, progress } = payload;
            let newState = {
                id: obj.menus[id].id,
                type: obj.menus[id].stage[progress].type,
                alternatives: obj.menus[id].stage[progress].alternative,
            }
            return newState;
        }

        case PlayerActions.SET_ANSWER: {
            const { answer, id, progress } = payload;
            if (answer === obj.menus[id].stage[progress].answerCorrect) {
                index++;
                let newState = {
                    id: index,
                    type: obj.menus[id].stage[progress].type,
                    alternatives: obj.menus[id].stage[progress].alternative,
                    answer: obj.menus[id].stage[progress].answerCorrect,
                    answered: true,
                }
                return Object.assign({}, state, newState);
            }

            else {
                return Object.assign({}, state, { answered: false });
            }

        }

        case PlayerActions.SET_INITIAL_ANSWER: {
            return Object.assign({}, state, { answered: undefined })
        }

        default: {
            return state;
        }
    }
};
