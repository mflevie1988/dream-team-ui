import { call, put } from 'redux-saga/effects';

import { SET_CREDENTIALS } from '../reducers/login';

export function* authenticateUser(payload: any) {
  yield put(
    SET_CREDENTIALS({
      user: {
        firstName: 'kasun',
        lastName: 'Pathirage',
        email: 'asdsad@sadfs.com'
      },
      accessToken: 'token'
    })
  );
  return;
}
