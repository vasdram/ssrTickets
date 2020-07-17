import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
    getFilteredData, getFilteredDataRequest, getFilteredDataSucces,
} from "../api/TicketsRest";
import qs from "qs";



export function* filteredDataFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;


    try {
       
        // let params = qs.stringify(action.payload, { indices: false })
        let tickets = yield call(getFilteredData, guiid, action.payload);

        yield put(getFilteredDataSucces( tickets.data ));

    } catch (error) {
        console.log(error.message);
    }
}

export default function* filteredDataRequestWatcher() {
    yield takeEvery(
        getFilteredDataRequest.toString(),
        filteredDataFlow,
    );
}