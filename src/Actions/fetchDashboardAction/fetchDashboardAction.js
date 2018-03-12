import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS } from "../../Constants/constants";

export const fetchDashboardAction = () => {
    console.log("Action")
    const action = {
        type: FETCH_DASHBOARD
    }

    return action;
}