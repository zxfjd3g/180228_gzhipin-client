/*
包含n个action creator函数的模块
同步action(与type的个数一样)
异步action(与异步ajax请求个数一样)
 */
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
import {reqLogin, reqRegister} from '../api'

// 请求成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

// 请求失败的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

// 注册的异步action
export const register = ({username, password, type}) => {
  return dispatch => {
    // 执行异步ajax请求注册接口
    reqRegister({username, password, type}).then(reponse => {
      const result = response.data  // {code: 0/1: data/msg: ???}
      if(result.code===0) { // 注册成功
        const user = result.data
        dispatch(authSuccess(user)) // 分发一个成功同步action
      } else { // 注册失败
        dispatch(errorMsg(result.msg)) // 分发一个失败同步action
      }
    })
  }
}

// 登陆的异步action
export const login = (username, password) => {
  return dispatch => {
    // 执行异步ajax请求登陆接口
    reqLogin(username, password).then(reponse => {
      const result = response.data  // {code: 0/1: data/msg: ???}
      if(result.code===0) { // 注册成功
        const user = result.data
        dispatch(authSuccess(user)) // 分发一个成功同步action
      } else { // 注册失败
        dispatch(errorMsg(result.msg)) // 分发一个失败同步action
      }
    })
  }
}