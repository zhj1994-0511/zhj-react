
import {createStore,applyMiddleware} from 'redux';

import{ composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import reducer from './reducers'


const middleware=process.env.NOOD_ENV==='development'?composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)


export default createStore(reducer,middleware)


//这里reducer  目前是 reducer内部传出的user  是一个包含数据的对象   在组建中使用 {user：{token}}  类似的解构获取数据