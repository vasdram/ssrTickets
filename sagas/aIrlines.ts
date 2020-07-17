import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
    getRangePriceRequest,
    getRangePriceValue,
    getRangePriceSucces, getAirlineRequest, getAirlines, getAirlineSucces
} from "../api/TicketsRest";



export function* airlinesValueFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;


    try {
        let airlines = yield call(getAirlines, guiid);
        while(airlines.data.length === 0) {
            airlines = yield call(getAirlines, guiid)
        }
        yield put(getAirlineSucces( airlines.data ));

    } catch (error) {
        console.log(error.message);
    }
}

export default function* airlinesValueRequestWatcher() {
    yield takeEvery(
        getAirlineRequest.toString(),
        airlinesValueFlow,
    );
}