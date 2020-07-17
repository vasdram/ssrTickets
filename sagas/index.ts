import { fork } from 'redux-saga/effects';

import autocompleteRequestWatcher from './autocomplete'
import ticketsRequestWatcher from './tickets';
import ticketsMoreRequestWatcher from "./ticketsMore";
import sortTicketsPriceRequestWatcher from "./sortTIcketsPrice";
import rangePriceValueRequestWatcher from "./rangePriceValue";
import airlinesValueRequestWatcher from "./aIrlines";
import aircraftValueRequestWatcher from "./aircraft";
import filteredDataRequestWatcher from "./filteredData";


export default function* () {
  yield fork(autocompleteRequestWatcher);
  yield fork(ticketsRequestWatcher);
  yield fork(ticketsMoreRequestWatcher);
  yield fork(sortTicketsPriceRequestWatcher);
  yield fork(rangePriceValueRequestWatcher);
  yield fork(airlinesValueRequestWatcher);
  yield fork(aircraftValueRequestWatcher);
  yield fork(filteredDataRequestWatcher);
}


