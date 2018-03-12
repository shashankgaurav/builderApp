import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD } from "../../Constants/constants";
import { services } from "../../Services/_mock_service";

export function* watchDashboardFetch() {
    yield takeEvery(FETCH_DASHBOARD, dashboardFetch);
}

function* dashboardFetch(action) {
    try {
        
        const response = yield call(services);
        /**
         * In case of an external API call, replace: 
         * For POST:
         * const response = yield call(axios.post, URL, {payload(header, any data to be sent)})
         * 
         * For GET:
         * const response = yield call(axios.post, URL, {payload(header, any data to be sent)})
        **/

         yield put({ type: FETCH_DASHBOARD_SUCCESS, response});

    }catch(error) {
        console.log(error);
    }
}