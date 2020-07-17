import { RouteComponentProps } from "react-router-dom";

export interface IProps {
  fixHead: boolean
}
export type TState = {
  departure: { value: string, label: string };
  arrival: { value: string, label: string };
  // startDate: Date | string;
  // endDate: Date | string;
  selectedWay: string;
  fixHead: boolean,
  [x: string]: any
};

export type IDeparture = { value: string, label: string }
export type  IArrival  = { value: string, label: string }


export type TTicketCity = {
  cityFrom: string, 
  cityTo: string
}

// export interface IProps extends RouteComponentProps<any> {
//   status?: string;
//   adult: number;
//   children: number;
//   infants: number;
//   flightClass: number;
//   stopFlightCount: number;
//   getDataCityRequest?: (e: any) => void;
//   updateAviaParams?: (queryData: any) => void;
//   getDataCityRequestDep: (e: any) => void;
//   getDataCityRequestArr: (e: any) => void;
//   getTicketRequest: (data: {}) => void;
//   setTicketCity: ({}: TTicketCity) => void;
//   options: []
//   lang: string,
//   autocompleteValueDepatcha: string,
//   autocompleteValueArrival: string,
//   isFix?: boolean,
//   aviaParamsDate: any
//   aviaParams: any
// }


