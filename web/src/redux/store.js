import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import todoReducer from './todoDuck';

const reducer = combineReducers({
    todo: todoReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;