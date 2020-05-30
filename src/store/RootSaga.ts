import {fork, all} from 'redux-saga/effects';
import authenticationSaga from 'features/accreditation/redux/sagas';

export default function* rootSaga() {
  yield all([fork(authenticationSaga)]);
}
