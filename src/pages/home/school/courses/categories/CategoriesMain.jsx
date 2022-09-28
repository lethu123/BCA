// ** React Imports
import {Fragment, useEffect} from 'react'

// ** Shop Components
import CategoriesSidebar from './CategoriesSidebar'
import Categories from './Categories'

// ** Custom Components
import Breadcrumbs from '@core/components/breadcrumbs'

// ** Store & Actions
import {useDispatch, useSelector} from 'react-redux'

// ** Styles
import '@core/scss/base/pages/app-ecommerce.scss'
import {useParams} from 'react-router-dom'

//redux
// import {
//   getListCourseCategoryCenterAction,
//   getListCourseCategoryFilterCenterAction,
//   getListSubCategoryCenterAction,
// } from 'redux/actions/hschools/courseCenterAction'
import {createSelector} from 'reselect'

//createSelect
// const listCategories = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.listCategoryCenter,
// )
// const selectCategoryCourses = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.selectCategoryCourse,
// )
// const typeFilters = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.typeFilter,
// )

const Shop = () => {
  //3rd
  const {id} = useParams()
  // ** Vars
  const dispatch = useDispatch()
  //useSelect
  // const listCategory = useSelector(listCategories)
  // const selectCategoryCourse = useSelector(selectCategoryCourses)
  // const typeFilter = useSelector(typeFilters)

  //const
  let count = 0
  // ** Get products
  // useEffect(() => {
  //   if (id) {
  //     dispatch(getListSubCategoryCenterAction(id))
  //   }
  // }, [id])

  // useEffect(() => {
  //   count++
  //   if (id && listCategory.length > 0 && count <= 1) {
  //     const data = listCategory.find(ele => ele.id === parseInt(id))
  //     dispatch({
  //       type: 'SELECT_CATEGORY_COURSE_CENTER',
  //       payload: {id: data.id, value: data.name, label: data.name},
  //     })
  //   }
  // }, [id, listCategory])
  // useEffect(() => {
  //   dispatch(getListCourseCategoryCenterAction())
  // }, [])
  // useEffect(() => {
  //   if (id) {
  //     let typeFilterr = {
  //       ...typeFilter,
  //       sub_category_id: JSON.stringify(typeFilter.sub_category_id),
  //     }
  //     // dispatch(getListCourseCategoryFilterCenterAction(1, 9, id, typeFilterr))
  //   }
  // }, [typeFilter.sub_category_id, id, typeFilter.rating])

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="hSchool"
        breadCrumbParent="Categories"
        breadCrumbParentTo="/hschool/course/categories"
        // breadCrumbActive={
        //   selectCategoryCourse ? selectCategoryCourse.value : 'Detail'
        // }
      />
      <Categories />
      <CategoriesSidebar />
    </Fragment>
  )
}
export default Shop
