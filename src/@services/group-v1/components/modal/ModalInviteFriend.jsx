//**UI */
import {Search, XCircle} from 'react-feather'
import {
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap'

//**Component */
// import MyButton from '@core/components/button/MyButton'
import {useEffect, useState} from 'react'

const ModalInviteFriend = ({open, toggle, data}) => {
  const [selectFriend, setSelectFriend] = useState([])
  console.log('selectFriend', selectFriend)
  useEffect(() => {
    setSelectFriend(
      data?.length ? data?.map(item => ({...item, isSelect: false})) : [],
    )
  }, [data])

  const handleSelect = (friend, isSelect) => {
    return setSelectFriend(listFriend => {
      return listFriend.map(item => {
        return item.id === friend.id ? {...item, isSelect} : item
      })
    })
  }

  let listFriendSelected = selectFriend?.filter(item => item.isSelect === true)

  return (
    <>
      <Modal
        className="modal-dialog-centered custom_modal_job"
        isOpen={open}
        toggle={toggle}
      >
        <ModalHeader
          className={`custom_modal_header bg-white d-flex align-items-center justify-content-center align-items-center pb-1 pt-1`}
          toggle={toggle}
        >
          <p className="title-20 text-dark mb-0">
            Mời bạn bè tham gia nhóm này
          </p>
        </ModalHeader>
        <ModalBody
          style={{borderBottom: '1px solid #E4E4E6'}}
          className="p-0 pt-2 pb-1"
        >
          <div className="container-fluid">
            <Row>
              <Col xl={7} lg={7} md={6} sm={12}>
                <InputGroup className="w-100">
                  <Input placeholder="search..." className="myinputSearch" />
                  <InputGroupText
                    className={`cursor-pointer mycustom_input_search`}
                  >
                    <Search size={24} />
                  </InputGroupText>
                </InputGroup>
                <div className="mt-2">
                  <p className="title-20">Gợi ý</p>
                </div>
                <ul className="m-0 px-0 mt-2">
                  {selectFriend.map(item => (
                    <li key={item.id} className="mb-3">
                      <Label
                        className="form-check-label w-100 custom-inp-checkbox d-flex align-items-center"
                        for={item.name}
                      >
                        <div style={{width: '40px', height: '40px'}}>
                          <img
                            src={item.avt}
                            alt={item.name}
                            className="rounded-circle w-100 h-100"
                            style={{objectFit: 'cover'}}
                          />
                        </div>
                        <p className="ml-1 title-20 mb-0">{item.name}</p>
                        <div className="ml-auto">
                          <Input
                            onChange={e => {
                              handleSelect(item, e.target.checked)
                            }}
                            type="checkbox"
                            id={item.name}
                            checked={item.isSelect}
                            style={{right: '0'}}
                          />
                          <span className="checkbox"></span>
                        </div>
                      </Label>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xl={5} lg={5} md={6} sm={12}>
                <div className="h-100 rounded-1 p-2">
                  <ul className="m-0 px-0 mt-2">
                    {listFriendSelected.map(item => (
                      <li key={item.id} className="mb-3">
                        <div className="d-flex align-items-center p-0 w-100 justify-content-between position-relative">
                          <div className="ms-1 d-flex align-items-center">
                            <div style={{width: '45px', height: '45px'}}>
                              <img
                                src={item.avt}
                                alt={item.name}
                                className="rounded-circle w-100 h-100"
                                style={{objectFit: 'cover'}}
                              />
                            </div>
                            <p className="ml-1 title-20 mb-0">{item.name}</p>
                          </div>
                          <div
                            style={{
                              right: '0',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                            className="position-absolute cursor-pointer"
                            onClick={() => handleSelect(item, false)}
                          >
                            <XCircle size={24} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <div className="d-flex justify-content-end">
          {/* <MyButton
            color="gray-1"
            className="title-16-700-24 text-color-primary-dark mt-1 me-2"
            text="Cancel"
            onClick={toggle}
          />
          <MyButton
            color="primary"
            className="title-16-700-24 mt-1"
            text="Invite"
          /> */}
        </div>
      </Modal>
    </>
  )
}

export default ModalInviteFriend
