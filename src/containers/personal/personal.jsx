/*
个人中心路由
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
class Personal extends Component {
  render () {
    return (
      <div>个人中心</div>
    )
  }
}

export default connect(
  state =>({}),
  {}
)(Personal)