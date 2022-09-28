import React from 'react'
import {
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import * as Icon from 'react-feather'
import senderImg from 'assets/images/portrait/small/avatar-s-2.jpg'
import receiverImg from 'assets/images/portrait/small/avatar-s-5.jpg'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(englishStrings)

export default function EditDetalCanvasChatMessage({
  messageState,
  setMessageState,
}) {
  const hanleClickLike = id => {
    messageState.map(item => {
      if (id === item.id) {
        item.isLike = !item.isLike
        item.isDisLike = false
        item.isHeart = false
      }
      return item
    })
    setMessageState([...messageState])
  }
  const handleCLickHeart = id => {
    messageState.map(item => {
      if (id === item.id) {
        item.isHeart = !item.isHeart
        item.isLike = false
        item.isDisLike = false
      }
      return item
    })
    setMessageState([...messageState])
  }
  const hanleClickDisLike = id => {
    messageState.map(item => {
      if (id === item.id) {
        item.isDisLike = !item.isDisLike
        item.isLike = false
        item.isHeart = false
      }
      return item
    })
    setMessageState([...messageState])
  }

  return (
    <div>
      {messageState.map((chat, i) => {
        return (
          <div
            key={i}
            className={`chat ${chat.isSent ? 'chat-right' : 'chat-left'}`}
            style={{padding: '10px 0'}}
          >
            <div className="chat-avatar">
              <div className="avatar m-0">
                {chat.isSent ? (
                  ''
                ) : (
                  <img
                    src={chat.isSent ? senderImg : receiverImg}
                    alt="chat avatar"
                    height="40"
                    width="40"
                  />
                )}
              </div>
            </div>
            <div
              className="chat-body"
              style={{padding: '0px 10px', margin: '10px 0'}}
            >
              <Row
                style={{
                  margin: 0,
                  justifyContent: chat.isSent ? 'flex-end' : 'flex-start',
                }}
              >
                {chat.isSent ? (
                  ''
                ) : (
                  <p
                    className="mb-0"
                    style={{
                      // textAlign: chat.isSent ? 'end' : 'start',
                      fontWeight: 'bold',
                      paddingRight: 5,
                    }}
                  >
                    {chat.name}
                  </p>
                )}
                <p style={{marginBottom: 0, fontSize: 12, color: '#707070'}}>
                  <TimeAgo date={new Date()} formatter={formatter} />
                </p>
              </Row>
              <div
                className="chat-content m-0"
                style={{maxWidth: '80%', position: 'relative'}}
              >
                <p>{chat.msg}</p>
                {chat.isLike ? (
                  <Icon.ThumbsUp
                    size={18}
                    className=" fonticon-wrap iconLike"
                    style={{marginRight: 3}}
                    color="#FFC002"
                  />
                ) : (
                  ''
                )}
                {chat.isHeart ? (
                  <Icon.Heart
                    size={18}
                    className=" fonticon-wrap iconHeart"
                    style={{marginRight: 3}}
                    color="#ea5455"
                  />
                ) : (
                  ''
                )}
                {chat.isDisLike ? (
                  <Icon.ThumbsDown
                    size={18}
                    className=" fonticon-wrap iconDisLike"
                    color="#6EB144"
                  />
                ) : (
                  ''
                )}
              </div>
              {chat.isSent ? (
                ''
              ) : (
                <Row
                  className="m-0 listIconMes"
                  style={{float: chat.isSent ? 'right' : 'left'}}
                >
                  <UncontrolledButtonDropdown direction="up">
                    <DropdownToggle color="#fff" className="p-0 pt-1 ">
                      <Icon.Compass
                        size={18}
                        className=" fonticon-wrap ml-1"
                        color="#808080"
                      />
                      {/* <Icon.ChevronUp size={15} /> */}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Row className="m-0">
                        <Icon.ThumbsUp
                          size={18}
                          className=" fonticon-wrap iconLike mr-1"
                          color={chat.isLike ? '#FFC002' : '#808080'}
                          onClick={() => hanleClickLike(chat.id)}
                          style={{marginLeft: 7}}
                        />
                        <Icon.Heart
                          size={18}
                          className=" fonticon-wrap iconHeart mr-1"
                          color={chat.isHeart ? '#ea5455' : '#808080'}
                          onClick={() => handleCLickHeart(chat.id)}
                        />
                        <Icon.ThumbsDown
                          size={18}
                          className=" fonticon-wrap iconDisLike"
                          color={chat.isDisLike ? '#6EB144' : '#808080'}
                          onClick={() => hanleClickDisLike(chat.id)}
                        />
                      </Row>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                  <Icon.CornerUpRight
                    size={18}
                    className=" fonticon-wrap mt-1 ml-1"
                    color="#808080"
                  />
                </Row>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
