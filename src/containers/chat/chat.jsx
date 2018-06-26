/*
对话聊天的路由组件
 */

import React, {Component} from 'react'
import {NavBar, List, InputItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {sendMsg} from '../../redux/actions'

const Item = List.Item

class Chat extends Component {

  state = {
    content: ''
  }

  send = () => {
    const {content} = this.state
    const from = this.props.user._id
    const to = this.props.match.params.userid
    // 发送消息
    this.props.sendMsg({from, to, content})

  }

  render() {

    const {user, chat} = this.props
    const {users, chatMsgs} = chat
    const targetId = this.props.match.params.userid
    const meId = user._id
    // 得到当前聊天的id
    const chatId = [targetId, meId].sort().join('_')

    // 对chatMsgs进行过滤(与目标用户的聊天记录)
    const currentMsgs = chatMsgs.filter(msg => msg.chat_id===chatId)
    // msg.to msg.from

    const targetUser = users[targetId]
    const targetIcon = targetUser.header ? require(`../../assets/imgs/${targetUser.header}.png`) : null

    return (
      <div id='chat-page'>
        <NavBar>aa</NavBar>
        <List>
          {
            currentMsgs.map((msg, index) => {
              if(msg.to===meId) { // 对方发给我的
                return (
                  <Item
                    key={index}
                    thumb={targetIcon}
                  >
                    {msg.content}
                  </Item>
                )
              } else { // 我发给对方的
                return (
                  <Item
                    key={index}
                    className='chat-me'
                    extra='我'
                  >
                    {msg.content}
                  </Item>
                )
              }
            })
          }
        </List>

        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            onChange={(val) => this.setState({content: val})}
            extra={
              <span onClick={this.send}>发送</span>
            }
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user, chat: state.chat}),
  {sendMsg}
)(Chat)