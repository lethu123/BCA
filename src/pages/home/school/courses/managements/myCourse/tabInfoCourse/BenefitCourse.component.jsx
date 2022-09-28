import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, FormGroup, Label, Row, ListGroup, ListGroupItem} from 'reactstrap'
// import {
//   selectBenefitOfCourse,
//   selectDetailCourse,
// } from 'redux/reselects/hschools/course.reselect'
// import {
//   createBenefitCourse,
//   getBenefits,
//   removeBenefitCourse,
// } from 'redux/actions/hschools/courseAction'
import {X} from 'react-feather'
import AutoComplete from 'components/form/AutoComplete.component'

const BenenfitCourse = () => {
  const [benefit, setBenefit] = useState({id: null, contetn: ''})
  const dispatch = useDispatch()
  // const listBenefit = useSelector(selectBenefitOfCourse)
  // const courseDetail = useSelector(selectDetailCourse)
  const [clearInput, setClearInput] = useState(true)

  useEffect(() => {
    // dispatch(getBenefits())
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    handleBeforeSubmit(benefit, true)
  }

  const handleChangeBenefit = e => {
    setClearInput(true)
    setBenefit({id: null, content: e.target.value.trim()})
  }
  const onSelectItem = option => {
    handleBeforeSubmit(option, false)
  }
  const handleRemoveBenefitCourse = ele => {
    // let eleIndex = courseDetail.benefit.findIndex(
    //   e => e.content === ele.content,
    // )
    // if (eleIndex !== -1) {
    //   let listBenefitCourse = [
    //     ...courseDetail.benefit.slice(0, eleIndex),
    //     ...courseDetail.benefit.slice(eleIndex + 1),
    //   ]
    //   // dispatch(removeBenefitCourse(courseDetail.id, listBenefitCourse))
    // }
  }

  const handleBeforeSubmit = (benefitData, createOption) => {
    if (benefitData.content.length > 0) {
      // if (listBenefit) {
      //   let ele = createOption
      //     ? listBenefit.find(ele => ele.content.trim() === benefitData.content)
      //     : courseDetail.benefit.find(
      //         ele => ele.content.trim() === benefitData.content,
      //       )
      //   if (!ele) {
      //     // dispatch(
      //     //   createBenefitCourse(
      //     //     benefitData,
      //     //     courseDetail.id,
      //     //     courseDetail.benefit,
      //     //     createOption,
      //     //   ),
      //     // )
      //   }
      //   setBenefit({id: null, content: ''})
      //   setClearInput(false)
      // }
    }
  }

  return (
    <div style={{minHeight: '500px'}}>
      <Row className="w-100 mt-3">
        <Col lg="10">
          <form onSubmit={handleSubmit}>
            <FormGroup className=" mt-2 mb-0" id="group-autocomplete">
              <Label for="basicInput" className="mb-0">
                <b>Some benefit of course</b>
              </Label>
              <AutoComplete
                // suggestions={listBenefit}
                suggestions={[]}
                className="form-control mb-0"
                type="text"
                filterKey="content"
                // placeholder="Enter username or email"
                defaultSuggestions={true}
                onChange={handleChangeBenefit}
                onSelectItem={onSelectItem}
                id="autocomplete"
                name="benefit"
                clearInput={clearInput}
              />
            </FormGroup>
          </form>

          {/* {courseDetail && courseDetail.benefit.length > 0 && (
            <ListGroup className="mt-2">
              {courseDetail.benefit.map((ele, index) => (
                <ListGroupItem key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="font-size-17">
                      {index + 1}. {ele.content}
                    </span>
                    <div>
                      <X
                        className="text-primary cursor-pointer"
                        size={20}
                        onClick={() => handleRemoveBenefitCourse(ele)}
                      />
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          )} */}
        </Col>
      </Row>
    </div>
  )
}

export default BenenfitCourse
