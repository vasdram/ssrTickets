import { handleActions } from 'redux-actions';
import {
  updateAviaParams,
  updateAviaParamsDate,
  updateAviaParamsWay
} from './actions';
import moment from 'moment';
import { TAviaParams } from './aviaparams.types';
import { select } from 'redux-saga/effects';

export const INITIAL_STATE: TAviaParams = {
  params: {
    origin: {
      cityName: '',
      cityCode: '',
    },
    destination: {
      cityName: '',
      cityCode: '',
    },
  },
  dates: {
    startDate: null, 
    endDate: null, 
  },
  selectWay: "twoWay"
};


export default handleActions(
  {
    [updateAviaParams]: (state: TAviaParams, actions: any): TAviaParams => ({
      ...state,
      params: actions.payload,
    }),
    [updateAviaParamsDate]: (state: TAviaParams, actions: any): TAviaParams => ({
      ...state,
      dates: actions.payload,
    }),

    [updateAviaParamsWay]: (state: TAviaParams, actions: any): TAviaParams => ({
      ...state,
      selectWay: actions.payload,
    }),

  },
  INITIAL_STATE,
);