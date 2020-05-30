import {ISetUserState} from '../types/AccreditationStateTypes';
import {AccreditationActions} from '../types/AccreditationActionTypes';
import {IAccreditationBaseAction} from '../action/AuthActions';

const initialState: ISetUserState = {
  name: '',
  status: 0,
  missingStage: 0,
  totalStage: 0,
  currentUser: [{id: 0, progress: 0, done: false}],
};

export default function (
  state: ISetUserState = initialState,
  action: IAccreditationBaseAction
) {
  const {type, payload} = action;
  switch (type) {
    case AccreditationActions.SET_USER: {
      return Object.assign({}, state, payload);
    }

    case AccreditationActions.SET_TOTAL_STAGE: {
      return Object.assign({}, state, payload);
    }

    case AccreditationActions.SET_STATUS: {
      return Object.assign({}, state, payload);
    }

    case AccreditationActions.SET_DECREMENT_STAGE: {
      let missingStage = state.missingStage++;
      let total = state.totalStage;
      let percent = (missingStage + 1) / total;

      return Object.assign({}, state, missingStage, {status: percent});
    }

    case AccreditationActions.LOGIN_REQUEST_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case AccreditationActions.LOGIN_REQUEST_ERRORED: {
      return Object.assign({}, state, payload);
    }

    default:
      return state;
  }
}
