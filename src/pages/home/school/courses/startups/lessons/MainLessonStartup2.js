import {Fragment} from 'react'

import '@core/scss/base/pages/page-blog.scss'
import PartOneLessonTwo from './part-one/PartOneLessonTwo'
import PartOneLessonThree from './part-one/PartOneLessonThree'
import PartOneLessonFour from './part-one/PartOneLessonFour'
import PartOneLessonOne from './part-one/PartOneLessonOne'
import PartTwoLessonFive from './part-two/PartTwoLessonFive'
import PartTwoLessonSix from './part-two/PartTwoLessonSix'
import PartTwoLessonSeven from './part-two/PartTwoLessonSeven'
import PartThreeLessonEight from './part-three/PartThreeLessonEight'

const BlogDetails = props => {
  const renderComponent = () => {
    switch (props.match.params.name_lesson) {
      case 'xay-dung-nhom-lam-viec-hieu-qua':
        return <PartOneLessonOne params={props.match.params} />
      case 'nhan-xet-ve-cac-van-de-trong-va-xuyen-nganh':
        return <PartOneLessonTwo params={props.match.params} />
      case 'phat-trien-y-tuong-kinh-doanh':
        return <PartOneLessonThree params={props.match.params} />
      case 'xac-dinh-co-hoi-kinh-doanh':
        return <PartOneLessonFour params={props.match.params} />
      case 'xay-dung-mo-hinh-kinh-doanh':
        return <PartTwoLessonFive params={props.match.params} />
      case 'thiet-ke-san-pham-toi-thieu-MVP-va-Prototype-Demo':
        return <PartTwoLessonSix params={props.match.params} />
      case 'phat-trien-san-pham-mo-rong':
        return <PartTwoLessonSeven params={props.match.params} />
      case 'tao-gia-tri':
        return <PartThreeLessonEight params={props.match.params} />
      default:
        break
    }
  }
  return <Fragment>{renderComponent()}</Fragment>
}

export default BlogDetails
