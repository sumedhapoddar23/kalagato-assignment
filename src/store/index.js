import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./root-reducer";
import saga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
