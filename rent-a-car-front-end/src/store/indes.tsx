import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import reducer from './slices';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;