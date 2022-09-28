import React, {useState, useEffect} from 'react'

import CategoriesCourseDashboard from './CategoriesCourseDashboard.component'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

import CategoriesCourseDashboardSub from './CategoriesCourseDashboardSub.component'

import '@core/scss/react/libs/react-select/_react-select.scss'

// import {
//   getListCourseCategoryAction,
//   getListTypeCourseCategoryAction,
//   getListCourseSubCategoryAction,
//   getListAreaAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {useDispatch} from 'react-redux'
import {createSelector} from 'reselect'
import {useSelector} from 'react-redux'
// Category
const selectListCategory = createSelector(
  state => state.hSchoolRebuild.management,
  category => category.listCategory,
)
const selectListTypeCategory = createSelector(
  state => state.hSchoolRebuild.management,
  type =>
    type &&
    type.listTypeCategory.map(item => ({
      id: item.id,
      label: item.name,
      value: item.name,
    })),
)
// Sub Category
const selecListCourseSubCategory = createSelector(
  state => state.hSchoolRebuild.management,
  subCategory => subCategory.listCourseSubCategory,
)
const selectListArea = createSelector(
  state => state.hSchoolRebuild.management,
  area =>
    area &&
    area.listArea.length > 0 &&
    area.listArea.map(item => ({
      id: item.id,
      label: item.name,
      value: item.name,
    })),
)
const CategoriesCourseDashboardMain = () => {
  const listCategory = useSelector(selectListCategory)
  const listTypeCategory = useSelector(selectListTypeCategory)
  const listCourseSubCategory = useSelector(selecListCourseSubCategory)
  const listArea = useSelector(selectListArea)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getListCourseCategoryAction())
  //   dispatch(getListTypeCourseCategoryAction())
  //   dispatch(getListAreaAction())
  // }, [])
  const [activeDetail, setActiveDetail] = useState('1')
  const toggleDetail = tab => {
    if (activeDetail !== tab) {
      setActiveDetail(tab)
    }
  }

  // SUB CATEGORY
  const [subCategory, setSubCategory] = useState(-1)
  // useEffect(() => {
  //   if (subCategory > -1) {
  //     dispatch(getListCourseSubCategoryAction(subCategory))
  //   }
  // }, [subCategory])

  return (
    <React.Fragment>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink
            active={activeDetail === '1'}
            onClick={() => {
              toggleDetail('1')
            }}
          >
            Category
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeDetail === '2'}
            onClick={() => {
              toggleDetail('2')
            }}
          >
            Sub Category
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={activeDetail}>
        <TabPane tabId="1">
          <CategoriesCourseDashboard
            listCategory={listCategory}
            listTypeCategory={listTypeCategory}
          />
        </TabPane>
        <TabPane tabId="2">
          <CategoriesCourseDashboardSub
            listCategory={listCategory}
            setSubCategory={setSubCategory}
            subCategory={subCategory}
            listCourseSubCategory={listCourseSubCategory}
            listArea={listArea}
          />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}

export default CategoriesCourseDashboardMain
