import { createAction } from 'redux-actions';
import { GET_ADULT, GET_FLIGHT_CLASS, GET_STOP_FLIGHT_COUNT, GET_CHILDREN, GET_INFANTS } from './constants';
import { TgetAdultAction } from './passengers.types';


const getAdult: any = createAction(GET_ADULT);
const getFlightClass: any = createAction(GET_FLIGHT_CLASS);
const getStopFlightCount: any = createAction(GET_STOP_FLIGHT_COUNT);
const getChildren: any = createAction(GET_CHILDREN);
const getInfants: any = createAction(GET_INFANTS);

export {
    getAdult,
    getFlightClass,
    getStopFlightCount,
    getChildren,
    getInfants
};
