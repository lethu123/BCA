import React, {useContext, useState} from 'react'
import {AlertOctagon, Check, ChevronDown, Plus, Star, Sun} from 'react-feather'
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  UncontrolledButtonDropdown,
  CustomInput,
} from 'reactstrap'
import EvidenceCapturedTab3Card from './EvidenceCapturedTab3Card.component'
import ModalNewValueTab3 from './ModalCustomerTab3/ModalNewValueTab3.component'
import ModalCreateValue from './ModalCustomerTab3/ModalCreateValue.component'
import {uid} from 'uid'
import {toast} from 'react-toastify'
import '../EditDetalCanvas.style.scss'
import DataTable from 'react-data-table-component'
import Rating from 'react-rating'
import {useRTL} from 'utility/hooks/useRTL'
import {ThemeColors} from 'utility/context/ThemeColors'

const dataCus = [
  {
    id: 10,
    customer: 'Customer Jobs(13)',
    dissent: 4,
    matched: 7,
    avg: 4.3,
    listCus: [
      {
        id: 1,
        type: 'Job-to-be-done',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 4.0,
      },
      {
        id: 2,
        type: 'Job-to-be-done',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
      {
        id: 3,
        type: 'Job-to-be-done',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
      {
        id: 4,
        type: 'Job-to-be-done',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 5.0,
      },
    ],
  },
  {
    id: 11,
    dissent: 5,
    matched: 8,
    avg: 2.8,
    customer: 'Customer Pain(13)',
    listCus: [
      {
        id: 5,
        type: 'Pain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 2.0,
      },
      {
        id: 6,
        type: 'Pain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
      {
        id: 7,
        type: 'Pain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
      {
        id: 8,
        type: 'Pain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 4.0,
      },
      {
        id: 9,
        type: 'Pain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
    ],
  },
  {
    id: 12,
    dissent: 5,
    matched: 6,
    avg: 1.7,
    customer: 'Customer Gain(13)',
    listCus: [
      {
        id: 13,
        type: 'Gain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 1.0,
      },
      {
        id: 14,
        type: 'Gain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 1.5,
      },
      {
        id: 15,
        type: 'Gain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: true,
        matched: false,
      },
      {
        id: 16,
        type: 'Gain',
        name:
          'the function, emotional, social jobs your customers need to have done.',
        dissent: false,
        matched: true,
        strength: 2.5,
      },
    ],
  },
]

const EvidenceCapturedTab3 = () => {
  const [isRtl, setIsRtl] = useRTL()
  const themeColors = useContext(ThemeColors)
  const listEvidence = [
    {
      id: 1,
      timeStart: '22 NOV 2020',
      timeEnd: '22 DEC 2020',
      type: 'Survey',
      name: 'Evidence',
      detail: 'Key Insignt',
    },
    {
      id: 2,
      timeStart: '22 NOV 2020',
      timeEnd: '22 DEC 2020',
      type: 'Interview',
      name: 'Evidence',
      detail: 'Key Insignt',
    },
  ]
  const arrValueModal = [
    {
      id: 1,
      timeStart: '22 NOV 2020',
      topic: 'EVIDENCE',
      type: 'Survey',
      name: 'Description Name',
      check: true,
    },
    {
      id: 2,
      timeStart: '22 NOV 2020',
      topic: 'EVIDENCE',
      type: 'Survey',
      name: 'Hello HSpace',
      check: true,
    },
    {
      id: 3,
      timeStart: '22 NOV 2020',
      topic: 'EVIDENCE',
      type: 'Interview',
      name: 'Hello Quyen',
      check: false,
    },
  ]
  const [arrValue, setArrValue] = useState(arrValueModal)
  const [listValue, setListValue] = useState(arrValueModal)
  const [listEvidences, setListEvidences] = useState(listEvidence)
  const [valueSearch, setValueSearch] = useState(null)
  const [valueCreate, setValueCreate] = useState('')
  const [modal2, setModal2] = useState(false)
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const toggleModal2 = () => {
    setModal2(!modal2)
  }
  const handleClickCard = value => {
    setModal(false)
    setListEvidences([...listEvidences, value])
  }
  const handleFilter = event => {
    if (event.target.value.length > 0) {
      let arrTmp = listValue.filter(item =>
        item.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()),
      )
      setArrValue(arrTmp)
    }
    setValueSearch(event.target.value)
  }
  const handleCreateValueMap = () => {
    toggleModal2()
    let item = {
      id: `a${uid()}`,
      timeStart: '22 NOV 2020',
      topic: 'EVIDENCE',
      type: 'Interview',
      name: valueCreate,
    }
    setArrValue([...arrValue, item])
    setListValue([...listValue, item])
    setValueCreate('')
    toast.success('Add Success!')
  }
  // const [star, setStar] = useState(0)

  const columns = [
    {
      name: ' CUSTOMER PROFILE',
      selector: 'customerprofile',
      sortable: true,
      minWidth: '360px',
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">{row.customer}</p>
      ),
    },
    {
      name: 'DISSENT',
      selector: 'dissent',
      sortable: true,
      maxWidth: '120px',
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">{row.dissent}</p>
      ),
    },
    {
      name: 'MATCHED',
      selector: 'matched',
      sortable: true,
      maxWidth: '120px',
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">{row.matched}</p>
      ),
    },
    {
      name: 'EVIDENCE STRENGTH',
      selector: 'evidencestrength',
      sortable: true,
      minWidth: '300px',
      cell: row => (
        <Progress
          style={{minHeight: '10px', minWidth: '160px'}}
          value={row.avg * 10 * 2}
          color={
            row.avg < 2
              ? 'danger'
              : row.avg >= 2 && row.avg < 4
              ? 'warning'
              : 'success'
          }
        >
          {row.avg}
        </Progress>
      ),
    },
  ]

  const ExpandableTable = ({data}) => {
    return (
      <Table responsive>
        <tbody>
          {data.listCus.map(item => (
            <tr key={item.id}>
              <td style={{width: '460px'}}>
                <p style={{fontWeight: 'bold', maxWidth: '460px'}}>
                  {item.type}:{' '}
                  <span style={{fontWeight: 'normal'}}>{item.name}</span>
                </p>
              </td>
              <td style={{width: '120px'}}>
                <CustomInput
                  type="radio"
                  className="custom-control-Primary"
                  id={`${item.id}1`}
                  defaultChecked={item.dissent ? true : false}
                  name={item.id}
                />
                {/* <Radio
                  color="primary"
                  defaultChecked={item.dissent ? true : false}
                  name={item.id}
                /> */}
                {/* <p
                  className="mb-0"
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '1px solid #ff6700',
                    background: item.dissent ? '#ff6700' : '#cccccc',
                  }}
                ></p> */}
              </td>
              <td style={{width: '120px'}}>
                <CustomInput
                  type="radio"
                  className="custom-control-success"
                  id={`${item.id}2`}
                  defaultChecked={item.dissent ? true : false}
                  name={item.id}
                />
                {/* <p
                  className="mb-0"
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '1px solid #6eb144',
                    background: item.matched ? '#6eb144' : '#cccccc',
                  }}
                ></p> */}
              </td>
              <td style={{minWidth: '300px'}}>
                {item.strength ? (
                  <Rating
                    emptySymbol={
                      <Star size={32} fill="#babfc7" stroke="#babfc7" />
                    }
                    fullSymbol={
                      <Star
                        size={32}
                        fill={themeColors.colors.warning.main}
                        stroke={themeColors.colors.warning.main}
                      />
                    }
                    fractions={2}
                    initialRating={item.strength}
                    direction={isRtl ? 'rtl' : 'ltr'}
                  />
                ) : (
                  /* <ReactStars
                    size={25}
                    count={5}
                    color="#ededed"
                    activeColor="#f4c150"
                    value={item.strength}
                    a11y={true}
                    isHalf={true}
                    edit={true}
                    emptyIcon={<i className="far fa-star "></i>}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    filledIcon={<i className="fa fa-star "></i>}
                    style={{outline: 'none', border: 'none'}}
                    onChange={newRating => {
                      // setStar(newRating)
                    }}
                  /> */
                  /* <Progress
                    style={{minHeight: '10px', maxWidth: '200px'}}
                    value={item.strength * 10 * 2}
                    color={
                      item.strength < 2
                        ? 'danger'
                        : item.strength >= 2 && item.strength < 4
                        ? 'warning'
                        : 'success'
                    }
                  >
                    {item.strength}
                  </Progress> */

                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    rows: {
      style: {
        margin: '10px 0',
      },
    },
    cells: {
      style: {
        // justifyContent: 'center',
      },
    },
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <h3>Choose Interrelated Evidences</h3>
          <Button.Ripple
            className="round ml-1"
            color="primary"
            outline
            style={{fontWeight: 'bold'}}
            onClick={() => toggleModal()}
          >
            <Plus className="mr-1" />
            <Sun className="mr-1" />
            Interrelated Evidences
          </Button.Ripple>
        </div>
        <AlertOctagon
          id="iconStateProblem"
          size={28}
          className=" fonticon-wrap ml-1"
          color="#fff"
          style={{backgroundColor: '#cccccc', padding: 3}}
        />
      </div>
      <Row
        style={{border: '1px solid #ff6700', borderRadius: '20px'}}
        className="mt-2 pt-2"
      >
        {listEvidences.map(item => {
          return (
            <Col lg={6} key={item.id}>
              <EvidenceCapturedTab3Card key={item.id} item={item} />
            </Col>
          )
        })}
      </Row>
      <p style={{fontSize: '16px', marginTop: '15px'}}>
        Choose the evidence to evaluate
      </p>
      <UncontrolledButtonDropdown className="mb-3">
        <DropdownToggle
          outline
          color="primary"
          caret
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <p
              style={{
                color: '#ff6700',
                textAlign: 'left',
                fontSize: '20px',
                marginBottom: '5px',
              }}
            >
              Survey: <span style={{color: '#626262'}}>Evidence</span>
            </p>
            <p className="mb-0">Key Insignt: If this text here too long...</p>
          </div>
          <ChevronDown color="#ff6700" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#" tag="a" className="d-flex">
            <Check color="#6eb144" className="mr-1" />
            <div>
              <p
                style={{
                  color: '#ff6700',
                  textAlign: 'left',
                  fontSize: '20px',
                  marginBottom: '5px',
                }}
              >
                Survey: <span style={{color: '#626262'}}>Evidence</span>
              </p>
              <p className="mb-0 ">
                Key Insignt: If this text here too long...
              </p>
            </div>
          </DropdownItem>
          <DropdownItem href="#" tag="a" className="pl-5">
            <p
              style={{
                color: '#ff6700',
                textAlign: 'left',
                fontSize: '20px',
                marginBottom: '5px',
              }}
            >
              Interview: <span style={{color: '#626262'}}>Evidence</span>
            </p>
            <p className="mb-0 ">Key Insignt: If this text here too long...</p>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <div style={{overflowX: 'scroll'}}>
        <DataTable
          data={dataCus}
          columns={columns}
          noHeader
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={<ExpandableTable />}
          customStyles={customStyles}
        />
      </div>

      <ModalNewValueTab3
        toggleModal={toggleModal}
        modal={modal}
        handleClickCard={handleClickCard}
        handleFilter={handleFilter}
        valueSearch={valueSearch}
        listValue={listValue}
        arrValue={arrValue}
        toggleModal2={toggleModal2}
      />
      <ModalCreateValue
        modal2={modal2}
        toggleModal2={toggleModal2}
        valueCreate={valueCreate}
        setValueCreate={setValueCreate}
        handleCreateValueMap={handleCreateValueMap}
      />
    </div>
  )
}

export default EvidenceCapturedTab3
