import { combineReducers, Reducer } from 'redux';
import tickets from '../api/Tickets/index';
import ticketsRest from '../api/TicketsRest/index';
import passengers from '../api/Passengers/index';
import autocomplete from '../api/Autocomplete/index';
import aviaParams from '../api/AviaParams/index';
import I18n from '../api/I18n/index';
import init from '../api/Init/reduser';
import { TRootState } from './redusers.types';

const allReducers: Reducer<TRootState> = combineReducers<TRootState>({
  init,
  passengers,
  autocomplete,
  aviaParams,
  I18n,
  ticketsRest
})

export default allReducers;