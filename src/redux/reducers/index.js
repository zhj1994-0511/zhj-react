import {combineReducers} from 'redux'


import user from './usermessage.'

export default combineReducers({
  user
})
//这里 user 是 函数调用后生成的新的数据state 是一个对象了  store 只能说代为保存传递

