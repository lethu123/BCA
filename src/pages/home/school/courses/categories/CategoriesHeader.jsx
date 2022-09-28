// ** Third Party Components
import classnames from 'classnames'
import {Grid, List, Menu} from 'react-feather'
import {Row, Col, ButtonGroup, Button} from 'reactstrap'
import {selectThemeColors} from 'utility/Utils'
import Select from 'react-select'

//css
import './Categories.style.scss'
//redux
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
// import {getListSubCategoryCenterAction} from 'redux/actions/hschools/courseCenterAction'

//createSelect

// const countCourses = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.countCourse,
// )

// const selectCategoryCourses = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.selectCategoryCourse,
// )

// const listCategories = createSelector(
//   state => state.hSchoolRebuild.center,
//   category =>
//     category &&
//     category.listCategoryCenter.map(ele => ({
//       label: ele.name,
//       value: ele.name,
//       id: ele.id,
//     })),
// )

const CategoriesHeader = ({activeView, setActiveView}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  //useselect
  // const countCourse = useSelector(countCourses)
  // const listCaregory = useSelector(listCategories)
  // const selectCategoryCourse = useSelector(selectCategoryCourses)

  //state

  // useEffect(() => {
  //   if (listCaregory.length > 0) {
  //     const data = listCaregory.find(ele => ele.id === parseInt(id))
  //     dispatch({type: 'SELECT_CATEGORY_COURSE_CENTER', payload: data})
  //   }
  // }, [listCaregory])
  return (
    <div className="ecommerce-header categories__header">
      <Row>
        <Col sm="12">
          <div className="ecommerce-header-items ">
            <div className="result-toggler d-flex justify-content-between w-100">
              <button className="navbar-toggler shop-sidebar-toggler">
                <span className="navbar-toggler-icon d-block d-lg-none">
                  <Menu size={14} />
                </span>
              </button>
              {/* <span className="search-results">
                {countCourse} Results Found
              </span> */}
              <div className="d-flex">
                <Select
                  theme={selectThemeColors}
                  className="react-select mr-1 category__select"
                  classNamePrefix="select"
                  // value={selectCategoryCourse}
                  name="clear"
                  // options={listCaregory.length > 0 ? listCaregory : []}
                  onChange={option => {
                    dispatch({
                      type: 'SELECT_CATEGORY_COURSE_CENTER',
                      payload: option,
                    })
                    option && history.push(`/hschool/categories/${option.id}`)
                  }}
                  isClearable
                />
                <ButtonGroup className="btn-group-toggle">
                  <Button
                    tag="label"
                    className={classnames('btn-icon view-btn grid-view-btn', {
                      active: activeView === 'grid',
                    })}
                    color="primary"
                    outline
                    onClick={() => setActiveView('grid')}
                  >
                    <Grid size={18} />
                  </Button>
                  <Button
                    tag="label"
                    className={classnames('btn-icon view-btn list-view-btn', {
                      active: activeView === 'list',
                    })}
                    color="primary"
                    outline
                    onClick={() => setActiveView('list')}
                  >
                    <List size={18} />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CategoriesHeader
