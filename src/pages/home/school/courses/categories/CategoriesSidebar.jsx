// ** Third Party Components
import classnames from 'classnames'
import {Star} from 'react-feather'
import {Card, CardBody, Row, Col, CustomInput, Button} from 'reactstrap'

// ** Styles
import '@core/scss/react/libs/noui-slider/noui-slider.scss'

//redux
import {useDispatch} from 'react-redux'

const CategoriesSidebar = props => {
  const dispatch = useDispatch()

  const {sidebarOpen} = props

  const ratings = [
    {
      id: 'raing1',
      ratings: 4,
    },
    {
      id: 'raing2',
      ratings: 3,
    },
    {
      id: 'raing3',
      ratings: 2,
    },
    {
      id: 'raing4',
      ratings: 1,
    },
  ]

  return (
    <div className="sidebar-detached sidebar-left">
      <div className="sidebar">
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen,
          })}
        >
          <Row>
            <Col sm="12">
              <h6 className="filter-heading d-none d-lg-block">Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className="brands">
                {/* {listSubCategory.length > 0 && (
                  <div>
                    <h6 className="filter-title  mt-0">Sub Categories</h6>
                    <ul className="list-unstyled brand-list">
                      {listSubCategory.map(ele => {
                        return (
                          <li key={ele.id}>
                            <span>{ele.name}</span>
                            <CustomInput
                              type="checkbox"
                              id={ele.id}
                              label={ele.title}
                              checked={typeFilter.sub_category_id.includes(
                                ele.id,
                              )}
                              onChange={e =>
                                e.target.checked
                                  ? dispatch({
                                      type: 'FILTER_COURSE_CATEGORY_CENTER',
                                      payload: {
                                        ...typeFilter,
                                        sub_category_id: [
                                          ...typeFilter.sub_category_id,
                                          ele.id,
                                        ],
                                      },
                                    })
                                  : dispatch({
                                      type: 'FILTER_COURSE_CATEGORY_CENTER',
                                      payload: {
                                        ...typeFilter,
                                        sub_category_id:
                                          typeFilter.sub_category_id.filter(
                                            item => item !== ele.id,
                                          ),
                                      },
                                    })
                              }
                            />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )} */}
              </div>
              <div id="ratings">
                <h6 className="filter-title">Ratings</h6>
                {ratings.map(item => {
                  return (
                    <div key={item.id} className="ratings-list">
                      <div onClick={e => e.preventDefault()}>
                        <ul className="unstyled-list list-inline cursor-pointer">
                          {new Array(5).fill().map((listItem, index) => {
                            return (
                              <li
                                key={index}
                                className="ratings-list-item mr-25"
                              >
                                <Star
                                  className={classnames({
                                    'filled-star': index + 1 <= item.ratings,
                                    'unfilled-star': index + 1 > item.ratings,
                                  })}
                                />
                              </li>
                            )
                          })}
                          <li>& up</li>
                        </ul>
                      </div>
                      <div className="stars-received">
                        <CustomInput
                          type="radio"
                          id={item.id}
                          name="CustomeRadio"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div id="clear-filters">
                <Button.Ripple
                  color="primary"
                  block
                  onClick={() =>
                    dispatch({
                      type: 'FILTER_COURSE_CATEGORY_CENTER',
                      payload: {
                        search: null,
                        sub_category_id: [],
                        rating: null,
                      },
                    })
                  }
                >
                  Clear All Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CategoriesSidebar
