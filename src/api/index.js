/*
应用中所有接口的请求函数模块
根据接口编写
函数的返回值是promise
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = ''
// 请求登陆接口
export const reqLogin = (username, password) => ajax(BASE_URL+'/login', {username, password}, 'POST')

// 请求注册接口
export const reqRegister = ({username, password, type}) => ajax(BASE_URL+'/register', {username, password, type}, 'POST')

// 更新用户接口
export const reqUpdateUser = (user) => ajax(BASE_URL+'/update', user, 'POST')

// 获取当前用户
export const reqUser = () => ajax(BASE_URL+'/user')

// 请求获取用户列表
export const reqUserList = (type) => ajax('/userlist', {type})