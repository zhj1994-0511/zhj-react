
import {createStore,applyMiddleware} from 'redux';

import{ composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import reducer from './reducers'


const middleware=process.env.NOOD_ENV==='development'?composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)


export default createStore(reducer,middleware)