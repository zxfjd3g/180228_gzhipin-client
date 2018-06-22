/*
应用中所有接口的请求函数模块
根据接口编写
函数的返回值是promise
 */
import ajax from './ajax'

// 请求登陆接口
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// 请求注册接口
export const reqRegister = ({username, password, type}) => ajax('/register', {username, password, type}, 'POST')