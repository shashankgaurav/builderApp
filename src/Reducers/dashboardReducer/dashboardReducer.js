import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS } from "../../Constants/constants";

export const dashboardReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_DASHBOARD:
            return state;
        case FETCH_DASHBOARD_SUCCESS:
            return action.response;
        default:
            return state;
    }
}