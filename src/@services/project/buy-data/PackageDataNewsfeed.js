import {Badge, Button, Card, CardBody, CardTitle, Col, Row} from 'reactstrap'
import {Bizxu, Heart} from 'components/icon'
import ReactPaginate from 'react-paginate'
import {useState} from 'react'
// import Avatar from '@core/components/avatar'

//image
import bizxubg from 'assets/images/datacenter/bizxu-gb.png'
// import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import {User} from 'react-feather'
import {useHistory} from 'react-router'

// ** component

const PackageDataNewsfeed = () => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const history = useHistory()
  //   const [modal, setModal] = useState(false)

  //   const toggleModal = () => setModal(!modal)

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <Card className="mt-1">
      <CardBody>
        <Row className="mt-1">
          <Col lg="6" md="12" sm="6">
            <Card className="ecommerce-card">
              <div className="text-center position-relative">
                <div style={{height: '170px'}}>
                  <img
                    src={bizxubg}
                    alt="images"
                    className="img-fluid mr-2 h-100 w-100"
                  />
                </div>

                <Badge
                  color="white"
                  className="m-3"
                  style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                  }}
                >
                  ID: 1234
                </Badge>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-36%',
                    right: '5%',
                  }}
                >
                  <Badge
                    color="danger"
                    className="badge-glow d-flex align-items-center text-white px-3 py-2"
                  >
                    <Bizxu color="white" />
                    <span className="ml-2">20.000 BizXu</span>
                  </Badge>
                  <p className="pt-2">
                    Giá gốc:<strike> 20.000 </strike> BizXu <Bizxu />{' '}
                  </p>
                </div>
              </div>

              <CardBody
                className="text-left"
                style={{padding: '3rem 2.3rem 1.5rem 2.3rem'}}
              >
                <span className="text-danger">Gói dữ liệu</span>
                <CardTitle tag="div" className="mb-2">
                  <h4
                    className="mb-0 cursor-pointer"
                    onClick={() =>
                      history.push('/admin/du-an/quan-ly-cac-du-an/1/chi-tiet')
                    }
                  >
                    Thi Phương Insurace
                  </h4>
                </CardTitle>
                <p>
                  <User size="16" /> 5 liên hệ
                </p>
                <Button.Ripple color="primary" className="w-100">
                  Mua Ngay
                </Button.Ripple>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12" sm="6">
            <Card className="ecommerce-card">
              <div className="text-center position-relative">
                <div style={{height: '170px'}}>
                  <img
                    src={bizxubg}
                    alt="images"
                    className="img-fluid mr-2 h-100 w-100"
                  />
                </div>

                <Badge
                  color="white"
                  className="m-3"
                  style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                  }}
                >
                  ID: 1234
                </Badge>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-36%',
                    right: '5%',
                  }}
                >
                  <Badge
                    color="danger"
                    className="badge-glow d-flex align-items-center text-white px-3 py-2"
                  >
                    <Bizxu color="white" />
                    <span className="ml-2">20.000 BizXu</span>
                  </Badge>
                  <p className="pt-2">
                    Giá gốc: <strike> 20.000 </strike> BizXu <Bizxu />{' '}
                  </p>
                </div>
              </div>

              <CardBody
                className="text-left"
                style={{padding: '3rem 2.3rem 1.5rem 2.3rem'}}
              >
                <span className="text-danger">Gói dữ liệu</span>
                <CardTitle tag="div" className="mb-2">
                  <h4 className="mb-0">Thi Phương Insurace</h4>
                </CardTitle>
                <p>
                  <User size="16" /> 5 liên hệ
                </p>
                <Button.Ripple color="primary" className="w-100">
                  Mua Ngay
                </Button.Ripple>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <ReactPaginate
          forcePage={currentPage}
          onPageChange={page => handlePagination(page)}
          pageCount={1}
          breakLabel={'...'}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName={'active'}
          pageClassName={'page-item'}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={
            'pagination my-1 react-paginate pagination-sm justify-content-center pr-1'
          }
          nextLabel={''}
          previousLabel={''}
        />
      </CardBody>
    </Card>
  )
}

export default PackageDataNewsfeed
