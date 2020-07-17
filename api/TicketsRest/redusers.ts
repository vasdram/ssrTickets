import { handleActions } from 'redux-actions';
import {
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
  getRangePriceRequest,
  getRangePriceSucces,
  getAirlineRequest,
  getAirlineSucces,
  getAircraftRequest,
  getAircraftSucces,
  getFilteredDataSucces, getFilteredDataRequest
} from './actions';
import { RequestStatuses } from '../../constants/API';
import { TTikets } from './tickets.types';


const INITIAL_STATE: TTikets = {
  status: RequestStatuses.inactive,
  data: [],
  error: null,
  guiid: '',
  cityFrom: '',
  cityTo: '',
  filtersPriceMinMax: [],
  airLines: [],
  aircraft: []
}


export default handleActions<TTikets>({
  [getSortTicketsPriceRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),

  [getFilteredDataRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getFilteredDataSucces]: (state: TTikets, action: any): TTikets => ({
    ...state,
    data: action.payload,
    status: RequestStatuses.success
  }),

  [getAircraftRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getAircraftSucces]: (state: TTikets, action: any): TTikets => ({
    ...state,
    aircraft: action.payload,
    status: RequestStatuses.success
  }),


  [getAirlineRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getAirlineSucces]: (state: TTikets, action: any): TTikets => ({
    ...state,
    airLines: action.payload,
    status: RequestStatuses.success
  }),

  [getRangePriceRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getRangePriceSucces]: (state: TTikets, action: any): TTikets => ({
    ...state,
    filtersPriceMinMax: action.payload,
    status: RequestStatuses.success
  }),
  [getTicketRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getTicketMoreRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    status: RequestStatuses.request
  }),
  [getTicketMoreSuccess]: (state: TTikets, action: any): TTikets => ({
    ...state,
    data: [...state.data, ...action.payload],
    status: RequestStatuses.success
  }),
  [getGuiIdTicketRequest]: (state: TTikets, action: any): TTikets => ({
    ...state,
    guiid: action.payload,
    status: RequestStatuses.request
  }),
  [getTicketSuccess]: (state: TTikets, action: any): TTikets => ({
    ...state,
    data: action.payload,
    status: RequestStatuses.success
  }),

  [setTicketCity]: (state: TTikets, action: any): TTikets => ({
    ...state,
    cityFrom: action.payload.cityFrom,
    cityTo: action.payload.cityTo
  }),

  [getGuiIdFail]: (state: TTikets, action: any): TTikets => ({
    ...state,
    error: action.payload,
    status: RequestStatuses.failure
  })
}, INITIAL_STATE)