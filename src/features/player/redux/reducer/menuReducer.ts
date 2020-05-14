import { PlayerActions } from "../types/PlayerActionTypes";
import { IMenuState } from "../types/PlayerStateTypes";
import { ISetMenu } from "../types/PlayerPayloadTypes";
import { ISetMenuOptions } from "../action/playerActions";
import obj from "../../../../rules/rules.json";

const initialState: IMenuState = {
    type: obj.menus,
    currentStage: [{ id: 0, progress: 0 }, { id: 1, progress: 0 }]
}

export default function (state = initialState, action: ISetMenuOptions) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.SET_PROGRESS: {
            const { id, progress } = payload;
            state.currentStage[id] = { id: id, progress: progress }
            return state;
        }

        default: {
            return state;
        }
    }

}
