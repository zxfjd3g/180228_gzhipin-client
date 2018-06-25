/*
包含n个reducer函数的模块

 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, RECEIVE_USER_LIST} from './action-types'
import {getRedirectPath} from '../utils'

const initUser = {
  username: '',
  type: '',
  msg: '', // 错误信息
  redirectTo: '', // 需要自动重定向的path
}
function user(state=initUser, action) {
  // debugger
  switch (action.type) {
    case AUTH_SUCCESS:
      const user = action.data
      return {...user, redirectTo: getRedirectPath(user.type, user.header)}
    case ERROR_MSG:
      // state.msg = action.data
      return {...state, msg: action.data}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
}

const initUserList = []
function userList(state=initUserList, action) {
  switch (action.type) {
    case RECEIVE_USER_LIST:
      return action.data
    default:
      return state
  }
}



// 向外暴露一个整合后产生的reducer
export default combineReducers({
  user,
  userList
})
// 整合的reducer管理的状态: {user: {}}


