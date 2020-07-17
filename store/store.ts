import { createStore, applyMiddleware } from "redux";
import allReducers from './redusers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/index';
import { TRootState } from "./redusers.types";
import {composeWithDevTools} from "redux-devtools-extension"



const initialState: any = {}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
// @ts-ignore
store.sagaTask = sagaMiddleware.run(sagas)


export default store