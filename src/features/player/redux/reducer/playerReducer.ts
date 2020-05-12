import { IPlayerState } from "../types/PlayerStateTypes";
import { PlayerActions } from "../types/PlayerActionTypes";
import { IPlayerBaseActions } from "../action/playerActions";

const initialState = {
    loggedIn: false,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state, loggedIn: action.trueFalse,
            }
        }

        default: {
            return state;
        }
    }
};

export default playerReducer;