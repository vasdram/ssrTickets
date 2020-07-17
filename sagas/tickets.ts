import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getGuiIdTicketRequest,
  ticketRequest,
  getTIcketsDataRequest,
  getTickets,
  getTicketSuccess,
  getTicketRequest
} from '../api/TicketsRest';
import store from '../store/store';
import {RequestStatuses} from "../constants/API";

export function* ticketsRequestFlow(action: any) {
  const options = action.payload
  try {

    yield put(getTicketSuccess( [] ));
    const result = yield call(ticketRequest, options);
    yield put(getGuiIdTicketRequest(result.guiId));


    if(result.status === RequestStatuses.success) {
      let tickets = yield call(getTickets, result.guiId.taskId, 10);

      while(tickets.data.length === 0) {
        tickets = yield call(getTickets, result.guiId.taskId, 10);
      }
      if(tickets.data.errorType) {
        throw new Error(`(${tickets.data.errorType || 'ERROR'}) ${tickets.data.message}`)
      }
      yield put(getTicketSuccess( tickets.data ));
    }

  } catch (error) {
    console.log(error.message);
  }
}

export default function* ticketsRequestWatcher() {
  yield takeEvery(
    getTicketRequest.toString(),
    ticketsRequestFlow,
  );
}