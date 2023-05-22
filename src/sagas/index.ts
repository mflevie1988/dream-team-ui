import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { Dispatch } from '@reduxjs/toolkit';
import { authenticateUser } from './login';
import { getDestinationDetails } from './getDestinationDetails';

function* listenToFetchUserAuthentication() {
  yield takeEvery('login/FETCH_USER_AUTHENTICATION', authenticateUser);
}

export default function* rootSaga(dispatch: Dispatch) {
  yield all([fork(listenToFetchUserAuthentication), fork(getDestinationDetails)]);
}
