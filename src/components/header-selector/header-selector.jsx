/*
选择用户头像的组件
 */
import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
export default class HeaderSelector extends Component {
  render () {
    const header = '已选择头像:'
    const headers = []
    for (var i = 0; i < 20; i++) {
      const text = '头像' + (i+1)
      const icon = require(`./imgs/${text}.png`)
      headers.push({text, icon})
    }
    return (
      <List renderHeader={() => header}>
        <Grid data={headers}
            columnNum={5}

        />
      </List>
    )
  }
}