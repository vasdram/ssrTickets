import { handleActions } from 'redux-actions';
import { getDataCitySuccess, getDataCityRequest, getDataCityRequestDep, getDataCityRequestArr } from './actions'
import { RequestStatuses } from '../../constants/API';
import { TAutocompleteState } from './autocomplete.types';






const INITIAL_STATE: TAutocompleteState = {
  queryStringDepatcha: "",
  queryStringArrival: "",
  cityAutocomplete: [],
  status: RequestStatuses.inactive,
  queryString: ''
};



export default handleActions({
  [getDataCityRequestDep]: (state: TAutocompleteState, action: any): TAutocompleteState => ({
    ...state,
    queryStringDepatcha: action.payload,
  }),

  [getDataCityRequestArr]: (state: TAutocompleteState, action: any): TAutocompleteState => ({
    ...state,
    queryStringArrival: action.payload,
  }),

  [getDataCityRequest]: (state: TAutocompleteState, action: any): TAutocompleteState => {
    return {
      ...state,
      queryString: action.payload,
      status: RequestStatuses.request,
    }
  },
  [getDataCitySuccess]: (state: TAutocompleteState, action: any): TAutocompleteState => ({
    ...state,
    cityAutocomplete: action.payload,
  }),
}, INITIAL_STATE)