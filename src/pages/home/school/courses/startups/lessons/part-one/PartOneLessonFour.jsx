import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
// import Avatar from '@core/components/avatar'
import Breadcrumbs from '@core/components/breadcrumbs'
import {Row, Col, Card, CardBody, CardImg, Badge} from 'reactstrap'

import '@core/scss/base/pages/page-blog.scss'

import startupOpportunity from 'assets/images/myCourse/opportunity.jpeg'

const PartOneLessonFour = props => {
  console.log(props)
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/blog/list/data/detail').then(res => setData(res.data))
  }, [])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success',
  }

  const renderTags = () => {
    return data.blog.tags.map((tag, index) => {
      return (
        <a key={index} href="/" onClick={e => e.preventDefault()}>
          <Badge
            className={classnames({
              'mr-50': index !== data.blog.tags.length - 1,
            })}
            color={badgeColorsArr[tag]}
            pill
          >
            {tag}
          </Badge>
        </a>
      )
    })
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Khóa học Khởi nghiệp"
        breadCrumbParent="HShool"
        breadCrumbParent2="Khóa học Khởi nghiệp"
        breadCrumbParent3="Phần 1 Khám phá Cơ hội Khởi nghiệp"
        breadCrumbParentTo="/hschool/course/start-up"
        breadCrumbParent2To="/hschool/course/start-up"
        breadCrumbParent3To={`/hschool/course/start-up/${props.params.name_course}`}
        breadCrumbActive="Phát triển ý tưởng kinh doanh"
      />
      <div className="blog-wrapper row">
        <div className="content-detached col-lg-8">
          <div className="content-body">
            {data !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    <CardImg
                      src={startupOpportunity}
                      className="img-fluid"
                      top
                      style={{height: '350px'}}
                    />
                    <CardBody>
                      <h1>Chương 4: Xác định Cơ hội Kinh doanh</h1>

                      <div className="my-1 py-25">{renderTags()}</div>
                      <div>
                        <p>
                          <b>Kiểm chứng Ý tưởng với khách hàng</b>
                        </p>

                        <p>
                          <span style={{fontWeight: 400}}>
                            Các Ý tưởng được quan tâm và ưu tiên nhất đối với
                            khách hàng sẽ trở thành Cơ hội Kinh doanh, tạo thành
                            các cặp Vấn đề-Giải pháp phù hợp(Problem-Solution
                            FIT) cho mô hình kinh doanh(Business Model Canvas)
                            và phát triển sản phẩm(Product Management) mô tả chi
                            tiết cách các sản phẩm tạo ra các giải pháp mang lại
                            giá trị cho khách hàng(Customer Value Proposition)
                            và giải quyết, hoàn thành các công việc giảm khó
                            khăn , rủi ro và tạo ra kết quả thỏa mãn kỳ vọng,
                            mong muốn của họ. Lúc này khách hàng sẽ sẵn sàng trả
                            tiền để có được sản phẩm, dịch vụ.
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>
                            Mục tiêu: Lựa chọn Ý tưởng Kinh doanh được chấp nhận
                            bởi khách hàng, có khả năng trả thành Cơ hội Kinh
                            doanh thông qua các thực nghiệm, nghiên cứu để có
                            được phản hồi từ khách hàng, xác thực các Ý tưởng
                            tạo ra giá trị và mang lại hiệu quả kinh doanh.
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>
                            Một Ý tưởng về giải pháp cho các vấn đề của khách
                            hàng&nbsp; chưa đủ hấp dẫn để họ phải chi trả để có
                            được nó, giải pháp này không tạo ra giá trị. Lúc này
                            các phản hồi của khách hàng về giải pháp cần được
                            xem xét và tiến hành chỉnh sửa hoặc thiết kế lại,
                            lặp lại chu trình thiết kế-kiểm nghiệm và chỉnh sửa
                            đến khi có được đề xuất giá trị được khách hàng quan
                            tâm và chấp nhận chi trả. Lúc này ta có được cặp Ý
                            tưởng Product-Market FIT gồm các Vấn đề - Giải pháp
                            được khách hàng xác thực với bằng chứng và độ tin
                            cậy cao, sẵn sàng trở thành để phát triển Mô hình
                            Kinh doanh và Sản phẩm tối thiểu MVP hay Prototype,
                            Demo.
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>
                            Đề xuất giá trị trước khi được xác thực vẫn là một
                            giả thuyết, giả thuyết này cần được kiểm nghiệm qua
                            các nhiệm vụ khám phá và thăm dò Ý kiến khách hàng
                            dưới dạng các nhiệm vụ Thử nghiệm(Experiment) để
                            đánh giá kết quả và loại ý tưởng không tạo giá trị
                            hay Nghiên cứu(Research) để tìm hiểu và khảo sát.
                            Công việc Kiểm nghiệm các Ý tưởng lúc này phụ thuộc
                            vào khả năng hiểu những gì cần thiết để tạo ra một
                            giả thuyết rõ ràng để thực hiện Thử nghiệm xác thực
                            Ý tưởng đó trước khách hàng, hay chỉ có thể Nghiên
                            cứu tìm hiểu nhu cầu khách hàng nhằm cố gắng hiểu
                            được thị trường, tạo ra Ý tưởng rõ ràng để tiến hành
                            thực nghiệm triển khai cho mô hình kinh doanh hay
                            phát triển sản phẩm tối thiểu, prototype hay demo.
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>
                            Có 2 phương pháp Kiểm nghiệm các Ý tưởng đối với
                            khách hàng:
                          </span>
                        </p>
                        <ul style={{listStyle: 'none'}}>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>- Thực nghiệm</span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>- Nghiên cứu</span>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>

        <Sidebar params={props.params} chapter={4} />
      </div>
    </Fragment>
  )
}

export default PartOneLessonFour
