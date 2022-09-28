import React from 'react'
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Search,
  Star,
  Twitter,
  Users,
  X,
} from 'react-feather'
import {Link} from 'react-router-dom'
import {history} from 'theme/history'
import {
  Badge,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  CardHeader,
} from 'reactstrap'
import bar from 'theme/assets/img/icons/bar.svg'
import parse from 'html-react-parser'

const CourseDashboardContent = ({
  metadata,
  type,
  listCourse,
  setPage,
  searchCourse,
  setSearchCourse,
  handleAddWishList,
  listInstructors,
}) => {
  const renderProducts = listCourse.map((product, i) => {
    return (
      <Card className="ecommerce-card" key={i}>
        <div className="card-content">
          <div className="item-img text-center w-100">
            <Link to={`/hschool/courses/detail/${product.slug}`}>
              <img
                className="img-fluid"
                src={product.picture}
                alt={product.title}
              />
            </Link>
          </div>
          <CardBody>
            <div className="item-wrapper">
              <div className="item-rating">
                <Badge color="primary" className="badge-md">
                  <span className="mr-50 align-middle">{product.rating}</span>
                  <Star size={14} />
                </Badge>
              </div>

              <p className="font-medium-2 mb-0 text-left d-flex">
                <img src={bar} alt="" />
                <small className="text-success ml-1 mt-50">
                  {product.level}
                </small>
              </p>
              <div className="product-price">
                <h6 className="item-price">
                  {' '}
                  <Users
                    size={15}
                    style={{marginRight: '5px', marginBottom: '6px'}}
                  />
                  {product.member}
                </h6>
              </div>
            </div>
            <div className="item-name">
              <Link to={`/hschool/courses/detail/${product.slug}`}>
                {' '}
                <span>{product.title}</span>
              </Link>
            </div>
            <div className="item-desc">
              <div className="item-description my-1">
                {parse(product.about)}
              </div>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <div
              className="wishlist"
              onClick={() => handleAddWishList(product)}
            >
              <X size={15} />
              <span className="align-middle ml-50">Remove</span>
            </div>
          </div>
        </div>
      </Card>
    )
  })

  const renderInstructors = listInstructors.map(ele => (
    <Card key={ele.id}>
      <CardHeader className="mx-auto">
        <div className="avatar mr-1 avatar-xl">
          <img src={ele.avatar} alt="avatarImg" />
        </div>
      </CardHeader>
      <CardBody className="text-center">
        <h4
          className="text-bold-600 cursor-pointer"
          onClick={() => history.push(`/user/${ele.url}/profile`)}
        >
          {ele.username}
        </h4>
        <p>{ele.email}</p>
        <p>
          {ele.skills.length > 0 ? (
            ele.skills.map(data => (
              <Badge
                key={data.id}
                pill
                className="badge-glow mr-50"
                style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
              >
                {data.name}
              </Badge>
            ))
          ) : (
            <Badge
              pill
              className="badge-glow"
              style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
            >
              Development
            </Badge>
          )}
        </p>
        <div>
          <Badge
            style={{backgroundColor: '#0676E8'}}
            className="mr-1 mb-1 cursor-pointer"
          >
            <Facebook size={12} />
          </Badge>
          <Badge
            style={{backgroundColor: '#E53880'}}
            className="mr-1 mb-1 cursor-pointer"
          >
            <Instagram size={12} />
          </Badge>
          <Badge
            style={{backgroundColor: '#51A9EC'}}
            className="mr-1 mb-1 cursor-pointer"
          >
            <Twitter size={12} />
          </Badge>
        </div>
        <div className="card-btns d-flex justify-content-between">
          <Button.Ripple className="gradient-light-primary">
            Follow
          </Button.Ripple>
          <Button.Ripple color="primary" outline>
            Message
          </Button.Ripple>
        </div>
        <hr className="my-2" />
        <div className="card-btns d-flex justify-content-between">
          <div className="float-left">
            <Star size="15" className="warning" />
            <span className="ml-50 align-middle">4.9</span>
          </div>
          <div className="float-right">
            <Briefcase size="15" className="primary" />
            <span className="ml-50 align-middle">
              {ele.c_course + 1} Courses
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  ))

  return (
    <div>
      <Row>
        <Col sm="12">
          <div className="ecommerce-searchbar mt-1">
            <FormGroup className="position-relative">
              <Input
                className="search-product"
                placeholder="Search Title..."
                value={searchCourse}
                onChange={setSearchCourse}
              />
              <div className="form-control-position">
                <Search size={22} />
              </div>
            </FormGroup>
          </div>
        </Col>
        <Col sm="12">
          <div id="ecommerce-products" className="grid-view">
            {listCourse.length > 0 && type === 2 && renderProducts}
            {listInstructors.length > 0 && type === 3 && renderInstructors}
          </div>
        </Col>
        {type !== 2 && (
          <Col sm="12">
            <div className="ecommerce-pagination">
              <Pagination className="d-flex justify-content-center mt-2">
                <PaginationItem
                  className="prev-item"
                  onClick={() => setPage(metadata.previous_page_number || 1)}
                >
                  <PaginationLink first>
                    <ChevronLeft />
                  </PaginationLink>
                </PaginationItem>
                {metadata &&
                  metadata.page_range.map((ele, idx) => (
                    <PaginationItem
                      key={idx}
                      active={ele === metadata.current_page}
                      onClick={() => {
                        if (ele !== metadata.current_page) {
                          setPage(ele)
                        }
                      }}
                    >
                      <PaginationLink>{ele}</PaginationLink>
                    </PaginationItem>
                  ))}

                <PaginationItem
                  className="next-item"
                  onClick={() =>
                    setPage(metadata.next_page_number || metadata.current_page)
                  }
                >
                  <PaginationLink last>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default CourseDashboardContent
