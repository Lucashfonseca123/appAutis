import { ISetUserState } from "../types/AccreditationStateTypes";
import { AccreditationActions } from "../types/AccreditationActionTypes";
import { IAccreditationBaseAction } from "../action/AuthActions";

const initialState: ISetUserState = {
    name: '',
    status: 0
};

export default function (state: ISetUserState = initialState,
    action: IAccreditationBaseAction) {
    const { type, payload } = action;
    switch (type) {
        case AccreditationActions.SET_USER: {
            return Object.assign({}, state, payload)
        }
        default:
            return state;
    }
}
