import React from 'react'
import {Button, Col, Row} from 'reactstrap'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'
// import fileHtml from '@services/automation/components/builder/data/test.html'

const EmailItem = ({item, stepper}) => {
  // *** CONTEXT
  const {chooseLibEmail: dispatchChooseLibEmail} = useSettingEmailCtx()

  return (
    <div className="card  card-email-item  mb-0 h-100">
      <div className=" card-header justify-content-center font-weight-bolder border-bottom">
        {item.name}
      </div>
      <div className="card-body pb-0 pt-5">{item.description}</div>
      <div className="card-footer border-0">
        <Row>
          <Col lg="6">
            <Button
              color="primary"
              type="button"
              // onClick={() =>
              //   setSetting({content: item.content, email, title: item.title}, id)
              // }
              onClick={() => {
                dispatchChooseLibEmail(item)
                stepper.next()
              }}
              block
              // outline
            >
              Chọn
            </Button>
          </Col>
          <Col lg="6">
            <Button
              color="info"
              type="button"
              // onClick={() =>
              //   setSetting({content: item.content, email, title: item.title}, id)
              // }

              block
              outline
            >
              Xem chi tiết
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default EmailItem
