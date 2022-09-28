import React, {useState} from 'react'
import {Button, Card, CardBody, Input} from 'reactstrap'
import './EditDetalCanvas.style.scss'
import * as Icon from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import EditDetalCanvasListChatMessage from './EditDetalCanvasListChatMessage.component'

export default function EditDetalCanvasMessageHeader() {
  const chatsList = [
    {
      id: '1',
      msg: 'Cake sesame snaps cupcake gingerbread',
      isSent: true,
      name: 'Hoàng Quyên',
      isLike: false,
      isDisLike: false,
      isHeart: false,
    },
    {
      id: '2',
      msg: 'Apple pie pie jujubes chupa chups muffin',
      isSent: false,
      name: 'Khắc Vũ',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '3',
      msg: 'Chocolate cake',
      isSent: true,
      name: 'Hoàng Quyên',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '4',
      msg: 'Donut sweet pie oat cake dragée fruitcake',
      isSent: false,
      name: 'Khắc Vũ',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '5',
      msg: 'Liquorice chocolate bar jelly beans icing',
      isSent: true,
      name: 'Hoàng Quyên',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '6',
      msg: 'Powder toffee tootsie roll macaroon cupcake',
      isSent: false,
      name: 'Khắc Vũ',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '7',
      msg:
        'Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert',
      isSent: true,
      name: 'Hoàng Quyên',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
    {
      id: '8',
      msg: 'Biscuit cake jujubes carrot cake topping sweet cake',
      isSent: false,
      name: 'Khắc Vũ',
      isLike: false,
      isHeart: false,
      isDisLike: false,
    },
  ]
  const [messageState, setMessageState] = useState(chatsList)
  const [stateNull, setStateNull] = useState('')
  const [mess, setMess] = useState(null)
  const tmpMess = {
    id: Math.random().toString(36).substr(2, 5),
    msg: stateNull,
    isSent: true,
    name: 'Hoàng Quyên',
    isLike: false,
    isHeart: false,
    isDisLike: false,
  }
  const handleSend = () => {
    let listTmp = tmpMess
    setMess(listTmp)

    setMessageState([...messageState, tmpMess])
    setStateNull('')
  }

  return (
    <Card className="chat-application chat-widget mb-0">
      <div className="chat-app-window">
        <PerfectScrollbar
          className="user-chats widget-user-chat"
          options={{
            wheelPropagation: false,
          }}
          ref={el => {
            // this.chatArea = el
          }}
          style={{height: '100vh', padding: '15px'}}
        >
          <div className="chats">
            <EditDetalCanvasListChatMessage
              mess={mess}
              messageState={messageState}
              setMessageState={data => setMessageState(data)}
            />
          </div>
        </PerfectScrollbar>
        <div className="chat-footer">
          <CardBody className="d-flex justify-content-around">
            <Input
              className="mr-50"
              placeholder="Type your message..."
              value={stateNull}
              onChange={e => setStateNull(e.target.value)}
            />
            <Button className="btn-icon" color="primary" onClick={handleSend}>
              <Icon.Send size={15} />
            </Button>
          </CardBody>
        </div>
      </div>
    </Card>
  )
}
