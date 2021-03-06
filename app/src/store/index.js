import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    )
}