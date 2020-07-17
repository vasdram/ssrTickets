import axios from "axios"
import {REST, AUTOCOMPLETE, TICKETS, FILTERS} from "../constants/API";
import { TResponce } from "./rest.types";
import qs from "qs";


class Rest {

  url: string;
  options: {};

  constructor(url: string, options: {}) {
    this.url = url
    this.options = options
  }

  public get = (method: string, params: any = null): TResponce<any> => {
    return axios.get(`${this.url}/${method}`, {
      params, 
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }})
        .then((response: any) => {
          return response;
        })
        .catch(error => {
          const { response: { status = 0 } = {}, message } = error;
          throw new Error(`ERROR ${method}! ${status}: ${message}`);
        });
  };


  public post = (method: string, params: any = null): TResponce<any> => {
    return axios.post(`${this.url}/${method}`, params, { headers: this.options, })
      .then(response => {
        return response;
      })
      .catch(error => {
        const { response: { status = 0 } = {}, message } = error;
        throw new Error(`ERROR ${method}! ${status}: ${message}`);
      });
  };

}

const rest = new Rest(REST.URL, REST.HEADERS)
const restTickets = new Rest(TICKETS.URL, TICKETS.HEADERS)
const autoCompete = new Rest(AUTOCOMPLETE.URL, AUTOCOMPLETE.HEADERS)
const filters = new Rest(FILTERS.URL, FILTERS.HEADERS)

export { autoCompete, rest, restTickets, filters }