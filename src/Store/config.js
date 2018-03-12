import { createStore } from "redux";
import { rootReducer } from "../Reducers/index";
import { middleware, runMiddleware } from "./configMiddlewares";

const store = createStore(rootReducer, middleware);
runMiddleware();

export default store;