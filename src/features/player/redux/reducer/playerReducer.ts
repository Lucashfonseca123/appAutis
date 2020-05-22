import { IPlayerState } from "../types/PlayerStateTypes";
import { PlayerActions } from "../types/PlayerActionTypes";
import { IPlayerBaseActions } from "../action/playerActions";
import obj from "../../../../rules/rules.json";

let index = [0, 0];

const initialState: IPlayerState = {
    id: 0,
    type: obj.menus[0].stage[0].type,
    alternatives: obj.menus[0].stage[0].alternative,
    done: false
};

export default function (state = initialState, action: IPlayerBaseActions) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.GET_INFOS: {
            const { id, progress } = payload;
            let newState = {
                id: progress,
                type: obj.menus[id].stage[progress].type,
                alternatives: obj.menus[id].stage[progress].alternative,
                done: false
            }
            return newState;
        }

        case PlayerActions.SET_ANSWER: {
            const { answer, id, progress } = payload;
            // console.log(obj.menus[id].stage.length);
            // console.log(progress);

            if (obj.menus[id].stage.length - 1 === progress && answer === obj.menus[id].stage[progress].answerCorrect) {
                return Object.assign({}, state, { done: true })
            } else {
                if (answer === obj.menus[id].stage[progress].answerCorrect) {
                    index[id]++;

                    let newState = {
                        id: index[id],
                        type: obj.menus[id].stage[progress].type,
                        alternatives: obj.menus[id].stage[progress].alternative,
                        answer: obj.menus[id].stage[progress].answerCorrect,
                        answered: true,
                        done: false
                    }
                    return Object.assign({}, state, newState);
                }

                else {
                    return Object.assign({}, state, { answered: false });
                }
            }
        }

        case PlayerActions.SET_INITIAL_ANSWER: {
            return Object.assign({}, state, { answered: undefined })
        }

        case PlayerActions.SET_INITAL_STATE_PLAYER: {
            const { id } = payload;
            index[id] = 0;
            let newState = {
                id: index[id],
                type: obj.menus[id].stage[0].type,
                alternatives: obj.menus[id].stage[0].alternative,
                answer: obj.menus[id].stage[0].answerCorrect,
                answered: undefined,
                done: false
            }

            return Object.assign({}, state, newState);
        }

        case PlayerActions.RESET_DONE: {
            return Object.assign({}, state, { done: false })
        }

        default: {
            return state;
        }
    }
};
