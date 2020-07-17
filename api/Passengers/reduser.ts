import { handleActions } from 'redux-actions';
import {
  getAdult,
  getFlightClass,
  getStopFlightCount,
  getChildren,
  getInfants
} from './actions';
import { TPassengersState, TPassengersAction, TgetAdult, TgetFlightClass } from './passengers.types';


const INITIAL_STATE: TPassengersState = {
  adult: 1,
  children: 0,
  infants: 0,
  flightClass: 0,
  stopFlightCount: 0,
};



export default handleActions<TPassengersState, TPassengersAction>({
  [getAdult]: (state: TPassengersState, action: any): TPassengersState => ({
    ...state,
    adult: action.payload,
  }),
  [getFlightClass]: (state: TPassengersState, action: any): TPassengersState => ({
    ...state,
    flightClass: action.payload,
  }),
  [getStopFlightCount]: (state: TPassengersState, action: any): TPassengersState => ({
    ...state,
    stopFlightCount: action.payload,
  }),
  [getChildren]: (state: TPassengersState, action: any): TPassengersState => ({
    ...state,
    children: action.payload,
  }),
  [getInfants]: (state: TPassengersState, action: any): TPassengersState => ({
    ...state,
    infants: action.payload,
  })

}, INITIAL_STATE)