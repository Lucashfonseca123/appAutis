import { PlayerActions } from "../types/PlayerActionTypes";
import { IMenuState } from "../types/PlayerStateTypes";
import { ISetMenu } from "../types/PlayerPayloadTypes";
import { ISetMenuOptions } from "../action/playerActions";
import obj from "../../../../rules/rules.json";

const initialState: IMenuState = {
    type: obj.menus,
    menuSelected: ""
}

export default function (state = initialState, action: ISetMenuOptions) {
    const { type, payload } = action;
    switch (type) {
        case PlayerActions.SET_MENU_OPTION: {
            const { type } = payload;
            return Object.assign({}, state, { menuSelected: type })
        }

        default: {
            return state;
        }
    }

}
