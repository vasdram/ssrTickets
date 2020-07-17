import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
    getAircraft, getAircraftRequest, getAircraftSucces,
    getAirlineRequest,
    getAirlineSucces,
} from "../api/TicketsRest";



export function* aircraftValueFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;


    try {
        let aircraft = yield call(getAircraft, guiid);

        while(aircraft.data.length === 0) {
            aircraft = yield call(getAircraft, guiid);
        }

        yield put(getAircraftSucces( aircraft.data ));

    } catch (error) {
        console.log(error.message);
    }
}

export default function* aircraftValueRequestWatcher() {
    yield takeEvery(
        getAircraftRequest.toString(),
        aircraftValueFlow,
    );
}