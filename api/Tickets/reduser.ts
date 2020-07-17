import { handleActions } from 'redux-actions';
import {
  getTicketsRequest,
  getTicketsSuccess,
  getTicketsFail,
} from './actions';
import { RequestStatuses } from '../../constants/API';


const INITIAL_STATE = { data: [], status: RequestStatuses.inactive, error: null };
export default handleActions(
  {
    [getTicketsRequest]: (state: {}): {} => ({
      ...state,
      status: RequestStatuses.request,
    }),
    [getTicketsSuccess]: (state: any, action: any): {} => {

      return {
        ...state,
        data: [...state.data, action.payload],
        status: RequestStatuses.success,
      }
    },
    [getTicketsFail]: (state: any, action: any): {} => ({
      deposit: 0,
      error: action.payload,
      status: RequestStatuses.failure,
    }),
  },
  INITIAL_STATE,
);
