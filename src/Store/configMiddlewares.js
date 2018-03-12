import { applyMiddleware } from "redux";
import { sagas } from "../Sagas/index";
import createSagaMiddleware from "redux-saga";

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

export const middleware = applyMiddleware(...middlewares);

export const runMiddleware = () => {
    return sagaMiddleware.run(sagas)
}
