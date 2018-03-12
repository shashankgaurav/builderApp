import { LOGIN_INITIATED } from "../../Constants/constants"

export const loginAction = () => {
    const action = {
        type: LOGIN_INITIATED
    }
    return action;
}