import { call, put, takeEvery, select } from 'redux-saga/effects';
import {getSortTicketsPriceRequest, getTicketSuccess, sortTicketsPrice} from "../api/TicketsRest";



export function* sortTicketsPriceRequestFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;


    // const options = action.payload
    try {
        let tickets = yield call(sortTicketsPrice, guiid);
        yield put(getTicketSuccess( tickets.data ));

    } catch (error) {
        console.log(error.message);
    }
}

export default function* sortTicketsPriceRequestWatcher() {
    yield takeEvery(
        getSortTicketsPriceRequest.toString(),
        sortTicketsPriceRequestFlow,
    );
}