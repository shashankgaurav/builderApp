import { takeEvery } from "redux-saga";
import axios from "axios";
import { put, call } from "redux-saga/effects";

import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAIL, URL } from "../../Constants/constants";

export function* watchLoginSaga() {
    yield takeEvery (LOGIN_INITIATED, loginSaga);
}

function* loginSaga() {
    try{
        const response = yield call(axios.post, URL);
        if(response.status === 200) {
            let payload = response.data;
            payload = {
                payload,
                status: "login success"
            }
            yield put({ type: LOGIN_SUCCESS, payload})
        }

    }catch(error){
        console.log(error)
    }
}