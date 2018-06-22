/*
包含n个reducer函数的模块

 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'

const initUser = {
  username: '',
  type: '',
  msg: '' // 错误信息
}
function user(state=initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.data
    case AUTH_SUCCESS:
      // state.msg = action.data
      return {...state, msg: action.data}
    default:
      return state
  }
}



// 向外暴露一个整合后产生的reducer
export default combineReducers({
  user,
})
// 整合的reducer管理的状态: {user: {}}