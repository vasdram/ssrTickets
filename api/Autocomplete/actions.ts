import { createAction } from 'redux-actions';

const getDataCityRequestArr: any = createAction('GET_DATA_CITY_REQUEST_ARRIAVAL');
const getDataCityRequestDep: any = createAction('GET_DATA_CITY_REQUEST_DEPATCHA');
const getDataCityRequest: any = createAction('GET_DATA_CITY_REQUEST');
const getDataCitySuccess: any = createAction('GET_DATA_CITY_SUCCESS');

export { getDataCityRequest, getDataCitySuccess, getDataCityRequestArr, getDataCityRequestDep }