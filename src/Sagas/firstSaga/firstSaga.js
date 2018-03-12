import { takeEvery } from "redux-saga";
import axios from "axios";
import { put, call } from "redux-saga/effects";

import { FIRST_ACTION } from "../../Constants/constants";


/**
 *  Worker Saga: responsible for fetching data from services. 
 **/

function* firstSaga(action) {
    try{
        console.log("Hello! Saga is working!");
    } catch(error){
        console.log(error);
    }
}

/**
 * Watcher Saga: A listener for action type. Always present in the background.
 * Once the action type is matched, the respective worker saga is fired.
 * Only Watcher Saga needs to be exported.
 */

export function* watchFirstSaga() {
    yield takeEvery(FIRST_ACTION, firstSaga);
}