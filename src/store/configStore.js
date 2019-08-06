import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import rootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware)
);
window.store = store;
sagaMiddleware.run(rootSaga);
