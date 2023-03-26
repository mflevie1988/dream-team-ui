import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';

import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const SagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(SagaMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production'
});

SagaMiddleware.run(rootSaga, store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
