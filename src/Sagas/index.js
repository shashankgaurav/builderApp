import { watchFirstSaga } from "./firstSaga/firstSaga";
import { watchLoginSaga } from "./loginSaga/loginSaga";
import { watchDashboardFetch } from "./fetchDashboardSaga/fetchDashboardSaga";

//Creating single entry point for all the running saga. 
//Function sagas() used in store configuration for creating middleware instances.

export function* sagas() {
    yield [
        watchFirstSaga(),
        watchLoginSaga(),
        watchDashboardFetch()
    ]
}