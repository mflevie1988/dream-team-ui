import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { fetchDestinationDetails, receivedDestinationDetails } from '../reducers/destinations';

import { SagaIterator } from 'redux-saga';
import { destinations } from './dataset';
import { fetchBookingApi } from './helpers';

interface Response {
  ok: boolean;
  parsedBody?: any;
  response: Response;
}

export function* getDestinationDetails(): SagaIterator {
  yield takeEvery(fetchDestinationDetails, function* (action) {
    try {
      //const response: Response = yield call(fetchBookingApi, '/destination');
      //const destinations = response.parsedBody;
      yield delay(5000);
      const destination = destinations.find((item) => item.countryName.toLowerCase() === action.payload);
      if (destination) {
        yield put(receivedDestinationDetails(destination));
      }
      return;
      return;
    } catch (error) {
      console.log(error);
    }
  });
}
