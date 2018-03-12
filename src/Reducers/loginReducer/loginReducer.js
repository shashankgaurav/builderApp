import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAIL } from "../../Constants/constants";

export const loginReducer = (state = [], action) => {
    let status;
    switch(action.type) {
        case LOGIN_INITIATED:
            status = "login initiated";
            return {status: status};
        case LOGIN_SUCCESS:
            state = action.payload;
            return state;
        case LOGIN_FAIL:
            status = "login failed";
            return status;
        default:
            return state;
    }
}