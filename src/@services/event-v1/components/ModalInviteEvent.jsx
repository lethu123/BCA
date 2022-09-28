import {Fragment, useEffect, useState} from 'react'
import {Search, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  Input,
  Label,
} from 'reactstrap'

const data = [
  {
    id: 1,
    name: 'kiet',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
    isSelect: false,
  },
  {
    id: 2,
    name: 'khang',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
  },
  {
    id: 3,
    name: 'tuan',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
  },
  {
    id: 4,
    name: 'huy',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
  },
  {
    id: 5,
    name: 'thu',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
  },
  {
    id: 6,
    name: 'tai',
    avatar:
      'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
  },
]

const ModalInviteEvent = ({open, toggle}) => {
  const [invite, setInvite] = useState()
  const [select, setSelect] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    data?.map(item => {
      item.isSelect = false
    })

    setInvite(data)
  }, [data])

  const handleSelect = (id, target) => {
    if (target === true) {
      setInvite(
        invite?.map(item => {
          if (item.id === id) {
            item.isSelect = true
          }
          return item
        }),
      )
    }
    if (target === false) {
      setInvite(
        invite?.map(item => {
          if (item.id === id) {
            item.isSelect = false
          }
          return item
        }),
      )
    }
    setSelect(
      invite.filter(item => {
        return item.isSelect === true
      }),
    )
  }
  const handleFilterName = e => {}

  const Content = ({item}) => (
    <Label
      className="form-check-label form-select-custom w-100 custom-inp-checkbox d-flex align-items-center mb-1 p-50 rounded"
      for={item?.name}
    >
      <div style={{width: '40px', height: '40px'}}>
        <img
          src={item?.avatar}
          alt={item?.name}
          className="rounded-circle w-100 h-100"
          style={{objectFit: 'cover'}}
        />
      </div>
      <p className="ml-1 title-20 mb-0">{item?.name}</p>
      <div className="ml-auto">
        <Input
          onChange={e => {
            handleSelect(item?.id, e.target.checked)
          }}
          type="checkbox"
          id={item?.name}
          checked={item?.isSelect}
          style={{right: '0', top: '37%'}}
        />
        <span className="checkbox"></span>
      </div>
    </Label>
  )

  const renderContent = () => {
    return invite?.map(item => {
      const titleCondition = item?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item.id} item={item} />
      } else if (titleCondition) {
        return <Content key={item.id} item={item} />
      } else {
        return null
      }
    })
  }
  const onChange = e => {
    setSearchTerm(e.target.value)
  }

  const handelDelete = id => {
  }
  return (
    <>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle} className="text-center"></ModalHeader>
        <ModalBody>
          <h2 className="text-center mb-1">Add People</h2>
          <InputGroup className="input-group-merge mb-2">
            <InputGroupText className="mycustom_input_search">
              <Search size={14} />
            </InputGroupText>
            <Input
              placeholder="search..."
              className="myinputSearch"
              value={searchTerm}
              onChange={e => onChange(e)}
            />
          </InputGroup>
          <div style={{height: '106px', overflowX: 'auto'}} className="d-flex">
            {select.map(item => (
              <div
                div
                className="d-flex flex-column ml-50 mr-50 align-items-center"
                key={item.id}
              >
                <div
                  style={{width: '40px', height: '40px'}}
                  className="position-relative"
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-circle w-100 h-100"
                    style={{objectFit: 'cover'}}
                  />
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center rounded-circle cursor-pointer"
                    style={{
                      top: '-5px',
                      right: '-5px',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'white',
                    }}
                    onClick={() => {
                      handelDelete(item.id)
                    }}
                  >
                    <X size={18} />
                  </div>
                </div>
                <p className=" mb-0">{item.name}</p>
              </div>
            ))}
          </div>
          <div style={{maxHeight: '300px', overflowX: 'scroll'}}>
            {renderContent()}
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalInviteEvent
