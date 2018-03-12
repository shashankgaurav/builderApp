import { FIRST_ACTION } from '../../Constants/constants';

export const firstReducer = (state = [], action) => {
    switch(action.type) {
        case FIRST_ACTION:
            return action.text;
        default:
            return state;
    }
}