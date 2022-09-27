import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import kanyeReducer from "../features/kanye/kanyeSlice";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import { watchData } from "../features/kanye/kanyeSaga";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watchData()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      kanyeQuote: kanyeReducer,
    },
    middleware: [sagaMiddleware],
    devTools: true,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
