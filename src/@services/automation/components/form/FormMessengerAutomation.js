import React, {useCallback, useState} from 'react'
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import {Fragment} from 'preact'
import {AlertCircle, Plus} from 'react-feather'
import CardMessageItem from '../card/CardMessageItem'
import {uid} from 'uid'

const MESSENGER_LIB = [
  {
    id: 1,
    content:
      ' Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.',
  },
  {
    id: 2,
    content:
      ' Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitLab.',
  },
]
const initialMessage = {
  content: '',
}

const FormChatAutomation = ({setSetting, setting, id, onDelete, target}) => {
  // *** State
  const [active, setActive] = useState('1')
  const [listMessages, setListMessage] = useState(() => {
    if (setting && setting.datas) {
      return setting.datas
    } else {
      return [{...initialMessage, id: uid(10)}]
    }
  })

  let targetForkInteraction =
    target?.length > 0 &&
    target.find(el => el.id && el.id.includes('fork_interaction'))
  let idTargetForkInteraction = targetForkInteraction?.id || false

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const isValidation = useCallback(() => {
    let check = false

    listMessages.forEach(ele => {
      if (ele.content === '') {
        check = true
      }
    })
    return check
  }, [listMessages])

  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Tạo tin nhắn
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Thư viện mẫu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <div className="card px-5  border-0 box-shadow-0 bg-transparent mb-0">
            <div className="card-footer border-top-0 p-0 align-items-center">
              {listMessages.map((ele, idx) => (
                <CardMessageItem
                  key={idx}
                  setListMessage={setListMessage}
                  item={ele}
                />
              ))}

              {idTargetForkInteraction && (
                <Alert color="danger">
                  <div className="alert-body py-0">
                    <AlertCircle size={15} />{' '}
                    <span className="ml-1">
                      <strong>{targetForkInteraction.title}</strong> đã được
                      liên kết, không thể xóa!
                    </span>
                  </div>
                </Alert>
              )}
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div>
                  <Button.Ripple
                    color="warning"
                    onClick={() =>
                      setListMessage([
                        ...listMessages,
                        {id: uid(10), ...initialMessage},
                      ])
                    }
                  >
                    <Plus size="16" className="mr-1" />
                    Thêm
                  </Button.Ripple>
                </div>
                <div>
                  <Button
                    type="submit"
                    color="primary"
                    className="mr-2"
                    disabled={listMessages.length <= 0 || isValidation()}
                    onClick={() =>
                      setSetting({...setting, datas: listMessages}, id)
                    }
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={() => onDelete(id)}
                    type="button"
                    color="danger"
                    outline
                    disabled={idTargetForkInteraction}
                    style={{
                      cursor: idTargetForkInteraction
                        ? 'not-allowed'
                        : 'pointer',
                    }}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row className="align-items-center my-4">
            {MESSENGER_LIB?.map(item => (
              <Col lg="12" key={item.id}>
                <Card className="bg-transparent border-info shadow-none">
                  <CardBody>
                    <CardTitle tag="div" className="mb-2">
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div>Nội dung tin nhắn</div>
                        <Button.Ripple
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            setSetting(
                              {
                                content: item.content,
                              },
                              id,
                            )
                          }}
                          color="light"
                        >
                          Chọn
                        </Button.Ripple>
                      </div>
                    </CardTitle>

                    <div className="cart-text">{item.content}</div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default FormChatAutomation
