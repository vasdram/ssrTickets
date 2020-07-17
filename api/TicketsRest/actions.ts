import { createAction } from 'redux-actions';

const getGuiIdTicketRequest: any = createAction('GET_GUIID_REQUEST')
const getTicketMoreRequest: any = createAction('GET_TICKETS_MORE_REQUEST')
const getTicketRequest: any = createAction('GET_TICKETS_REQUEST')
const getGuiIdSuccess: any = createAction('GET_GUIID_SUCCESS')
const getTicketSuccess: any = createAction('GET_TICKETS_SUCCESS')
const getTicketMoreSuccess: any = createAction('GET_TICKETS_MORE_SUCCESS')
const getGuiIdFail: any = createAction('GET_GUIID_FAIL')
const getTicketFail: any = createAction('GET_TICKETS_FAIL')
const setTicketCity: any = createAction('SET_TICKETS_CITY')

// filters
const getSortTicketsPriceRequest: any = createAction('GET_SORT_TICKETS_PRICE_REQUEST')
const getSortTicketsPriceSucces: any = createAction('GET_SORT_TICKETS_PRICE_SUCCESS')
const getRangePriceRequest: any = createAction('GET_RANGE_PRICE_REQUEST')
const getRangePriceSucces: any = createAction('GET_RANGE_PRICE_SUCCESS')

const getAirlineRequest: any = createAction('GET_AIRLINE_REQUEST')
const getAirlineSucces: any = createAction('GET_AIRLINE_SUCCESS')

const getAircraftRequest: any = createAction('GET_AIRCRAFT_REQUEST')
const getAircraftSucces: any = createAction('GET_AIRCRAFT_SUCCESS')


const getFilteredDataRequest: any = createAction('GET_FILTEREDDATA_REQUEST')
const getFilteredDataSucces: any = createAction('GET_FILTEREDDATA_SUCCESS')

export {
  getTicketRequest,
  getTicketSuccess,
  getTicketFail,
  getGuiIdTicketRequest,
  getGuiIdSuccess,
  getGuiIdFail,
  getTicketMoreRequest,
  getTicketMoreSuccess,
  setTicketCity,
  getSortTicketsPriceRequest,
  getSortTicketsPriceSucces,
  getRangePriceRequest,
  getRangePriceSucces,
  getAirlineRequest,
  getAirlineSucces,
  getAircraftRequest,
  getAircraftSucces,
  getFilteredDataRequest,
  getFilteredDataSucces
}