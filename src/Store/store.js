import { createStore, applyMiddleware, compose } from 'redux'
import {createEpicMiddleware} from 'redux-observable';
import reducer from '../Reducers/index'
import combineEpics from '../Epics/index';

import logger from "redux-logger"
import thunk from "redux-thunk"
const epicMiddleware = createEpicMiddleware(combineEpics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(logger, epicMiddleware)

export default createStore(reducer, composeEnhancers(middleware))