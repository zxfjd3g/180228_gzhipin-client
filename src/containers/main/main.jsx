/*
主体界面的容器组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'

class Main extends Component {
  render () {
    return (
      <Switch>
        <Route path='/dasheninfo' component={DashenInfo}/>
        <Route path='/laobaninfo' component={LaobanInfo}/>
      </Switch>
    )
  }
}

export default connect()(Main)