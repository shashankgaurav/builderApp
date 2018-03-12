import { FIRST_ACTION } from '../../Constants/constants';

export const firstAction = (text) => {
    action = {
        type: FIRST_ACTION,
        text
    }

    return action;
}