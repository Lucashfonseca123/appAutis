import { PlayerActions } from "../types/PlayerActionTypes";
import { IMenuState } from "../types/PlayerStateTypes";
import { ISetProgressStage } from "../action/playerActions";
import obj from "../../../../rules/rules.json";
import Immutable from "seamless-immutable";

const initialState: IMenuState = {
    type: obj.menus,
    currentStage: [{ id: 0, progress: 0, done: false }],
}

export default function (state = initialState, action: ISetProgressStage) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.SET_PROGRESS: {
            const { id, progress } = payload;

            const indexCurrentStage = state.currentStage.findIndex(
                currentStage => currentStage.id === id
            )

            if (indexCurrentStage > -1) {
                state.currentStage[indexCurrentStage] = { id: id, progress: progress, done: state.currentStage[indexCurrentStage].done }
            }
            else {
                state.currentStage.push({ id: id, progress: progress, done: false })
            }

            // let newState;

            // newState = {
            //     ...state,
            //     currentStage: [
            //         Object.assign({}, ...state.currentStage,
            //             { id: id, progress: progress, done: state.currentStage.done })
            //     ]
            // };

            return state;
        }

        case PlayerActions.SET_INITAL_STATE_MENU: {
            const { id } = payload;
            state.currentStage[id] = { id: id, progress: 0, done: state.currentStage[id].done }
            return state;
        }

        case PlayerActions.SET_STAGE_DONE: {
            const { id, progress } = payload;
            state.currentStage[id] = { id: id, progress: progress, done: true };
            return state;
        }

        default: {
            return state;
        }
    }

}
