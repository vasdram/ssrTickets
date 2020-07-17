import { IAction } from "../../store/redusers.types"
import { GET_ADULT, GET_FLIGHT_CLASS, GET_STOP_FLIGHT_COUNT, GET_CHILDREN, GET_INFANTS } from './constants';

export type TPassengersState = {
    adult: number,
    children: number,
    infants: number,
    flightClass: number,
    stopFlightCount: number,
}



export type TgetAdult = IAction<typeof GET_ADULT, {adult: number}>
export type TgetFlightClass = IAction<typeof GET_FLIGHT_CLASS, {flightClass: number}>
export type TgetStopFlightCount = IAction<typeof GET_STOP_FLIGHT_COUNT, {stopFlightCount: number}>
export type TgetChildren = IAction<typeof GET_CHILDREN, {children: number}>
export type TgetInfants = IAction<typeof GET_INFANTS, {infants: number}>


export type TgetAdultAction = (adult: number) => TgetAdult

export type TPassengersAction = | TgetAdult | TgetFlightClass | TgetStopFlightCount | TgetChildren | TgetInfants