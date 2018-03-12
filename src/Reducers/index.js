import { combineReducers } from "redux";
import { firstReducer } from "./firstReducer/firstReducer";
import { loginReducer } from "./loginReducer/loginReducer";
import { dashboardReducer } from "./dashboardReducer/dashboardReducer";

/**
 *  Construct a "rootReducer" using "combineReducers" method provided by redux.
 *  The "combineReducer" method takes an object of reducers & combines them to create a single 
 *  point of entry for all the reducers.
 *  It will be inturn used in Store configuration to create a central store.
 **/

export const rootReducer = combineReducers({
    text: firstReducer,
    login: loginReducer,
    dashboard: dashboardReducer
}) 