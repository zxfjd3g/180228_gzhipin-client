/*
注册的容器组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class Register extends Component {
  render () {
    return (
      <div>Register</div>
    )
  }
}

export default connect()(Register)