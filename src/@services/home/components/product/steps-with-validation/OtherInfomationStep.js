import {Fragment, useState} from 'react'
import {ArrowLeft} from 'react-feather'
import {Button, Col, Label, Row} from 'reactstrap'
import Select from 'react-select'
import './Step.style.scss'
import {selectThemeColors} from 'utility/Utils'
import {useHistory} from 'react-router-dom'

const OtherInfomationStep = ({stepper, type}) => {
  const history = useHistory()
  const option = [
    {
      id: 2,
      value: 'BOJOSAM (Sâm xương khớp)',
      label: 'BOJOSAM (Sâm xương khớp)',
      image:
        'https://product.hstatic.net/1000347556/product/sasamviet_-_bojosam_0ca7c5cffc8045cfb38900166ab02d0d_large.jpg',
      title: 'Sa Sâm Việt',
    },
    {
      id: 3,
      value: 'BEAUTYSAM (Sâm đẹp da)',
      label: 'BEAUTYSAM (Sâm đẹp da)',
      image:
        'https://product.hstatic.net/1000347556/product/fb3afdd74ae0b0bee9f1_1beb159112f3405da58149c3e53dd9d0_large.jpg',
      title: 'Sa Sâm Việt',
    },
    {
      id: 4,
      value: 'NEUROSAM (Sâm hoạt huyết dưỡng não)',
      label: 'NEUROSAM (Sâm hoạt huyết dưỡng não)',
      image:
        'https://product.hstatic.net/1000347556/product/sasamviet_-_neurosam_f31252ee10144ca683375669a9c8c41b_large.jpg',
      title: 'Sa Sâm Việt',
    },
  ]
  const [optionHashtag, setOptionHashtag] = useState([
    {
      id: 1,
      label: 'Trị mụn',
      value: 'Trị mụn',
    },
    {
      id: 2,
      label: 'Dạ dày',
      value: 'Dạ dày',
    },
    {
      id: 3,
      label: 'Thể lực',
      value: 'Thể lực',
    },
  ])
  const formatOptionLabel = ({value, label, title, image}) => (
    <div style={{display: 'flex'}}>
      <div>
        <img
          src={image}
          alt=""
          className="img-fluid rounded-circle"
          style={{width: '45px', height: 45}}
        />
      </div>
      <div style={{marginLeft: '10px', color: '#ccc'}}>
        <h4 className="mb-0" style={{fontSize: 14}}>
          {label}
        </h4>
        <p className="mb-0" style={{color: '#626262'}}>
          {title}
        </p>
      </div>
    </div>
  )
  const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? '#FFB55C'
          : isFocused
          ? '#FFD8AA'
          : null,

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && '#ff6700',
        },
      }
    },
  }
  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">Các sản phẩm liên quan</h5>
      </div>
      <div className="otherProduct">
        <Row>
          <Col md="6">
            <Label>
              Chọn sản phẩm <span style={{color: '#EA5455'}}>*</span>
            </Label>
            <Select
              isMulti
              // isDisabled={true}
              className="React selectTeamBuildings w-100"
              classNamePrefix="select"
              name="invited"
              // defaultValue={optionsInvited[0]}
              formatOptionLabel={formatOptionLabel}
              options={option}
              styles={colourStyles}
            />
          </Col>
          <Col md="6">
            <Label for="data-course_for" className="text-bold-600">
              Hashtag
            </Label>
            <Select
              isMulti
              name="course_for"
              // value={defaultOption.course_for}
              className="React"
              theme={selectThemeColors}
              classNamePrefix="select"
              options={optionHashtag}
              // onChange={option => {
              //   setFieldValue(
              //     'course_for',
              //     option && option.length > 0
              //       ? option.map(ele => ({
              //           id: ele.id,
              //           name: ele.value,
              //         }))
              //       : [],
              //   )
              //   setDefaultOption({
              //     ...defaultOption,
              //     course_for: option,
              //   })
              // }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  setOptionHashtag([
                    {
                      id: null,
                      label: e.target.value,
                      value: e.target.value,
                    },
                    ...optionHashtag,
                  ])
                }
              }}
              noOptionsMessage={() => <div>Enter để thêm hashtag</div>}
            />
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-between mt-20">
        <Button.Ripple color="primary" onClick={() => stepper.previous()}>
          <ArrowLeft size={14} className="align-middle mr-5 " />
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <div>
          {/* <Button.Ripple color="primary" className="btn-next ml-4">
            <span className="align-middle d-sm-inline-block d-none">
              Lưu và ẩn
            </span>
          </Button.Ripple> */}
          <Button.Ripple
            color="danger"
            className="ml-4"
            onClick={() => history.push('/home/gian-hang/1')}
          >
            Lưu và hiển thị
          </Button.Ripple>
        </div>
      </div>
    </Fragment>
  )
}

export default OtherInfomationStep
