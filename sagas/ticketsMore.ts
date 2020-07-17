import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
    getTicketMoreRequest, getTicketMoreSuccess, getTickets
} from '../api/TicketsRest';


export function* ticketsMoreRequestFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;

    // const options = action.payload
    try {
        let tickets = yield call(getTickets, guiid, 10);
        yield put(getTicketMoreSuccess( tickets.data ));


    } catch (error) {
        console.log(error.message);
    }
}

export default function* ticketsMoreRequestWatcher() {
    yield takeEvery(
        getTicketMoreRequest.toString(),
        ticketsMoreRequestFlow,
    );
}