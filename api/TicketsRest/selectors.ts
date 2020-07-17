import { TRootState } from "../../store/redusers.types";
import { TTicketCity } from "../../components/Search/Search.types";


export const getTIcketsDataRequest = (state: TRootState): any[] => state.ticketsRest.data;
export const getTIcketsCity = (state: TRootState): TTicketCity => ({cityFrom: state.ticketsRest.cityFrom, cityTo: state.ticketsRest.cityTo});
export const getTIcketsStatusSelector = (state: TRootState): string => state.ticketsRest.status;
export const getRangePriceSelector = (state: TRootState): number[] => state.ticketsRest.filtersPriceMinMax;
export const getAirlinesSelector = (state: TRootState): Array<{code: string, name: string}> => state.ticketsRest.airLines;
export const getAircraftSelector = (state: TRootState): Array<{code: string, name: string}> => state.ticketsRest.aircraft;