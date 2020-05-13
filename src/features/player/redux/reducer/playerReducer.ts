import { IPlayerState } from "../types/PlayerStateTypes";
import { PlayerActions } from "../types/PlayerActionTypes";
import { IPlayerBaseActions } from "../action/playerActions";
import obj from "../../../../rules/rules.json";

let index = 0;

const initialState: IPlayerState = {
    menu: obj.menus[0].name,
    type: obj.menus[0].options[index].type,
    alternatives: obj.menus[0].options[index].alternative,
    answer: obj.menus[0].options[index].answerCorrect,
    answered: undefined
};

export default function (state = initialState, action: IPlayerBaseActions) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.SET_INFOS: {
            const { id, options, answer } = payload;
            let newState = {
                type: obj.menus[id].options[index].type,
                options: obj.menus[id].options[index].alternative,
                answer: obj.menus[id].options[index].answerCorrect,
            }
            console.log(payload);
            return state;
        }

        case PlayerActions.SET_ANSWER: {
            const { answer } = payload;
            if (answer === obj.menus[0].options[index].answerCorrect) {
                index++;
                let newState = {
                    type: obj.menus[0].options[index].type,
                    alternatives: obj.menus[0].options[index].alternative,
                    answer: obj.menus[0].options[index].answerCorrect,
                    answered: true
                }
                return newState;
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
