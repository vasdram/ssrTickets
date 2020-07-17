import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
    getRangePriceRequest,
    getRangePriceValue,
    getRangePriceSucces
} from "../api/TicketsRest";



export function* rangePriceValueFlow(action: any) {
    const store = yield select()
    const guiid = store.ticketsRest.guiid.taskId;


    try {
        let price = yield call(getRangePriceValue, guiid);

        yield put(getRangePriceSucces( [price.data[0].min, price.data[0].max] ));

    } catch (error) {
        console.log(error.message);
    }
}

export default function* rangePriceValueRequestWatcher() {
    yield takeEvery(
        getRangePriceRequest.toString(),
        rangePriceValueFlow,
    );
}