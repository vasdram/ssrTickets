import { TPassengersState } from "../api/Passengers/passengers.types";
import { TTikets } from "../api/TicketsRest/tickets.types";
import { TI18n } from "../api/I18n/I18n.types";
import { TAutocompleteState } from "../api/Autocomplete/autocomplete.types";
import { TAviaParams } from "../api/AviaParams/aviaparams.types";

export type TRootState = {
    init: any,
    passengers: TPassengersState,
    autocomplete: TAutocompleteState,
    aviaParams: TAviaParams,
    I18n: TI18n,
    ticketsRest: TTikets
    
}

export interface IAction<T, P = {}, M = {}> {
    type: T;
    payload?: P;
    meta?: M;
}