import React, {Fragment, useCallback, useState} from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Row,
  Col,
  Alert,
  Badge,
  CardLink,
  Card,
  // ListGroup,
  // ListGroupItem,
  CardText,
  Media,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  Table,
} from 'reactstrap'

import {Link2, MessageCircle} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {useParams} from 'react-router'
import {Link, useHistory} from 'react-router-dom'
import Spinner from '@core/components/spinner/Fallback-spinner'

// *** Components
import {
  CustomerLeadPostCard,
  CustomerLeadHistory,
} from '@services/customer-leads'

// ** hook
import {usePostUnAssignTagInDetailCustomerLead} from '@services/customer-leads/hook/mutation'
// ** query
import {CustomerLeadsQuery} from '@services/customer-leads'

//** assets */
import './Custom.style.scss'
import image from 'assets/images/avatars/avatar-blank.png'
import {isEmpty} from 'utility/Utils'
import {UserQuery} from '@services/user'
import Avatar from '@core/components/avatar'

// const styleLabel = {
//   height: 15,
//   width: 15,
//   borderRadius: 4,
//   backgroundColor: '#6BC06B',
//   marginTop: 4,
//   marginRight: 10,
// }
const listColor = ['secondary', 'danger', 'info', 'warning', 'primary']
const CustomerLeadsDetail = () => {
  const history = useHistory()
  const {uid} = useParams()

  // *** Query
  const {data, isLoading} = CustomerLeadsQuery.useProfileExploitedInfo(uid)
  const {data: listUser} = UserQuery.useGetListAllUserSys()

  // *** Mutation
  const {mutate: unAssignTag} = usePostUnAssignTagInDetailCustomerLead()

  const [active, setActive] = useState('1')

  const [pageHistory, setPageHistory] = useState(0)
  const [pageReaction, setPageReaction] = useState(0)
  const [pageProduct, setPageProduct] = useState(0)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const renderPagination = useCallback(
    (lists, type, setPage) => (
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        forcePage={type}
        onPageChange={page => setPage(page.selected)}
        pageCount={Math.round(lists.length / 10) || 1}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        nextClassName="page-item next"
        previousClassName="page-item prev"
        previousLinkClassName="page-link"
        pageLinkClassName={`page-link 'mx-2 p-2'`}
        containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-5 mt-1 mx-3"
      />
    ),
    [],
  )
  if (isLoading) return <Spinner />
  if (!data || !data?.data)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="font-weight-bold">Chưa có dữ liệu</span>
        </div>
      </Alert>
    )

  const {
    prf_id,
    prf_picture,
    // code,
    phone_number,
    email_account,
    // data_source_info,
    prf_birthday,
    // kind_of_interest_info,
    keyword,
    // preference,
    // demography,
    prf_relationship,
    website,
    prf_favorite_quotes,
    prf_name,
    recommendation_products,
    history_action,
    socials_link,
    posts,
    fr_name,
    tags,
    edu_name,
    work_name,
    pla_name,
    prf_age,
    prf_gender,
    prf_other_names,
    prf_avg_comment,
    prf_avg_like,
    prf_friend_count,
    grp_name,
    uid_care,
  } = data?.data

  const checkExistKey = key_ => {
    let index_ = null
    pla_name.forEach((element, index) => {
      if (typeof element[key_] !== 'undefined') {
        index_ = index
      }
    })
    return index_
  }

  let userCare
  if (uid_care) {
    if (listUser?.data.length > 0) {
      userCare = listUser.data.find(u => u.user_id === uid_care)
    }
  }

  const listRight = [
    {
      label: 'Email',
      element:
        email_account?.length > 0 ? (
          email_account?.length > 1 ? (
            <ul className="p-3 mb-0">
              {email_account.map(
                (ele, index) => index <= 4 && <li key={index}> {ele}</li>,
              )}
              {email_account.length > 4 && <li>...</li>}
            </ul>
          ) : (
            <span>{email_account[0]}</span>
          )
        ) : (
          'Chưa có dữ liệu'
        ),
      id: 13,
    },
    {
      label: 'SĐT',
      element:
        phone_number?.length > 0 ? (
          phone_number?.length > 1 ? (
            <ul className="p-3 mb-0">
              {phone_number.map(
                (ele, index) => index <= 4 && <li key={index}> {ele}</li>,
              )}
              {phone_number.length > 4 && <li>...</li>}
            </ul>
          ) : (
            <span>{phone_number[0]}</span>
          )
        ) : (
          'Chưa có dữ liệu'
        ),
      id: 14,
    },
    {
      label: 'Sinh nhật',
      value: prf_birthday || 'Chưa có dữ liệu',
      id: 24,
    },

    {
      label: 'Học vấn',
      element: !isEmpty(edu_name) ? (
        <ul className=" mb-0">
          {Object.keys(edu_name).map(
            (ele, index) =>
              edu_name[ele] && <li key={index}> {edu_name[ele]}</li>,
          )}
        </ul>
      ) : (
        'Chưa có dữ liệu'
      ),
      value: '',
      id: 1,
    },
    {
      label: 'Nghề nghiệp/ Nơi làm việc',
      value: '',
      id: 3,
      element:
        work_name?.length > 0 ? (
          work_name?.length ? (
            <ul className=" mb-0">
              {work_name.map(
                (ele, index) => index <= 4 && <li key={index}> {ele}</li>,
              )}
              {work_name.length > 4 && <li>...</li>}
            </ul>
          ) : (
            <span>{work_name[0]}</span>
          )
        ) : (
          'Chưa có dữ liệu'
        ),
    },
    {
      label: 'Đến từ',
      value: '',
      element: (
        <>
          {pla_name && checkExistKey('hometown') !== null ? (
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark hover-primary"
              href={pla_name[checkExistKey('hometown')].pla_link}
            >
              {pla_name[checkExistKey('hometown')]?.hometown}{' '}
              <Link2 className="ml-1 text-primary" size="15" />
            </a>
          ) : (
            'Chưa có dữ liệu'
          )}
        </>
      ),
      id: 4,
    },
    {
      label: 'Sống tại',
      value: '',
      element: (
        <>
          {pla_name && checkExistKey('current_city') !== null ? (
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark hover-primary"
              href={pla_name[checkExistKey('current_city')].pla_link}
            >
              {pla_name[checkExistKey('current_city')]?.current_city}
              <Link2 className="ml-1 text-primary" size="15" />
            </a>
          ) : (
            'Chưa có dữ liệu'
          )}
        </>
      ),
      id: 8,
    },
    {
      label: 'Tuổi',
      value: prf_age || 'Chưa có dữ liệu',
      id: 5,
    },
    {
      label: 'Giới tính',
      value: prf_gender
        ? prf_gender === 'Male'
          ? 'Nam'
          : 'Nữ'
        : 'Chưa có dữ liệu',

      id: 12,
    },
    {
      label: 'Mối quan hệ',
      value: prf_relationship || 'Chưa có dữ liệu',
      id: 6,
    },
    {
      label: 'Chủ đề quan tâm',
      value: '',
      element:
        keyword?.interest.length > 0 ? (
          <div>
            <div>Từ khóa</div>
            <div>
              {keyword.interest.map((item, idx) => (
                <Badge color="danger" className="mr-2 my-1" key={idx}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ) : (
          'Chưa có dữ liệu'
        ),
      id: 9,
    },
    {
      label: 'Tags',
      value: '',
      element: (
        <Fragment>
          {tags && tags.length > 0 ? (
            <div>
              {tags.filter(ele => ele !== null).length > 0 ? (
                tags.map(
                  (ele, idx) =>
                    ele !== null && (
                      <Badge
                        color={`light-${listColor[Math.abs(idx % 5)]}`}
                        className="mr-1 mb-1"
                        key={idx}
                      >
                        {ele.tag_name}
                        <span
                          className="pl-3 cursor-pointer"
                          onClick={() => {
                            const dataSubmit = {
                              customer_profile_id: uid,
                              customer_tag_id: ele.tag_id,
                            }
                            unAssignTag(dataSubmit)
                          }}
                        >
                          x
                        </span>
                      </Badge>
                    ),
                )
              ) : (
                <span className="text-muted"> Chưa gán tags </span>
              )}
            </div>
          ) : (
            'Chưa có dữ liệu '
          )}
        </Fragment>
      ),
      id: 11,
    },
    {
      label: 'Bạn bè',
      value: prf_friend_count || 'Chưa có dữ liệu',
      id: 22,
    },
    {
      label: 'Lượt like trung bình',
      value: prf_avg_like || 'Chưa có dữ liệu',
      id: 23,
    },
    {
      label: 'Lượt comment trung bình',
      value: prf_avg_comment || 'Chưa có dữ liệu',
      id: 15,
    },
    {
      label: 'Nhóm đã tham gia',
      value: '',
      id: 16,
      element:
        grp_name?.length > 0 ? (
          grp_name?.length > 1 ? (
            <ul className="p-3 mb-0">
              {grp_name.map(
                (ele, index) =>
                  index <= 4 && (
                    <li key={index}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="text-dark hover-primary"
                        href={ele.grp_url}
                      >
                        {ele.grp_name}
                        <Link2 className="ml-3 text-primary" size="15" />
                      </a>
                    </li>
                  ),
              )}
              {grp_name.length > 4 && <li>...</li>}
            </ul>
          ) : (
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark hover-primary"
              href={grp_name[0]?.grp_url}
            >
              {grp_name[0]?.grp_name}{' '}
              <Link2 className="ml-3 text-primary" size="15" />
            </a>
          )
        ) : (
          'Chưa có dữ liệu'
        ),
    },
    {
      id: 17,
      label: 'Tài khoản chăm sóc',
      element: userCare ? (
        <div className="d-flex align-items-center cursor-pointer">
          <div className="symbol symbol-50 symbol-light mr-1">
            <Avatar size="lg" img={userCare.avatar} />
          </div>
          <div>
            <p
              className="text-dark-75 text-hover-primary mb-1 font-size-lg"
              onClick={() =>
                history.push(`/user/${userCare.user_id}/profile/feed`)
              }
            >
              {userCare.user_name}
            </p>
            <span className="text-muted font-weight-bold d-block">
              {userCare.email}
            </span>
          </div>
        </div>
      ) : (
        'Chưa chăm sóc'
      ),
    },
  ]

  return (
    <div>
      <Breadcrumb className="py-2 mb-0">
        <BreadcrumbItem>
          <Link to="/home"> Trang Chủ </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/admin/potential-customers"> Khách Hàng Tiềm Năng</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active style={{cursor: 'context-menu'}}>
          <span> {prf_name || prf_id} </span>
        </BreadcrumbItem>
      </Breadcrumb>
      <div
        style={{width: '50%', marginLeft: '50%', transform: 'translateX(-50%)'}}
      >
        <div className="card card-custom gutter-b ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <Avatar
                onError={e => {
                  e.target.onerror = null
                  e.target.src = image
                }}
                img={prf_picture || image}
                imgHeight="100"
                imgWidth="100"
                imgClassName="rounded"
              />

              <div className="ml-2">
                <div>
                  <CardLink
                    className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
                    target="_blank"
                    href={`https://www.facebook.com/${prf_id}` || '#'}
                  >
                    {prf_name || prf_id}
                  </CardLink>
                </div>
                {prf_other_names && (
                  <div className="text-muted"> ({prf_other_names})</div>
                )}
                <div className="mt-2">
                  {socials_link?.length > 0 && (
                    <div>
                      <ul className="social-icons mb-0  ">
                        {socials_link.map((item, idx) => (
                          <li key={idx}>
                            <p className="mb-0">
                              <CardLink
                                target="_blank"
                                href={`${item.social_link}` || '#'}
                              >
                                {item.social_name === 'facebook' ? (
                                  <i className="fa fa-facebook" />
                                ) : (
                                  <i className="fa fa-instagram"></i>
                                )}
                              </CardLink>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-1">
              <div className="d-flex align-items-center  mb-2">
                <span className="font-weight-bold mr-2">Phễu khách hàng:</span>
                <div className="text-muted">
                  {fr_name ? (
                    <Badge color="danger" pill>
                      {fr_name}
                    </Badge>
                  ) : (
                    'Chưa có dữ liệu'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
          {!!prf_favorite_quotes && (
            <div className="card card-custom gutter-b">
              <CardBody className="qoutes">
                <div className="content_quotes position-relative ">
                  <div
                    className="bg-white p-5 card mb-0"
                    style={{boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)'}}
                  >
                    <figure className="quote mb-0">
                      <blockquote
                        className="curly-quotes mb-0"
                        cite="https://www.youtube.com/watch?v=qYLrc9hy0t0"
                      >
                        {prf_favorite_quotes}
                      </blockquote>
                    </figure>
                  </div>
                </div>
              </CardBody>
            </div>
          )}
          {website?.length > 0 && (
            <div className="card card-custom gutter-b">
              <div className="card-header border-0 p-5">
                <h3 className="card-title font-weight-bolder">Website</h3>
                <div className="d-flex w-100">
                  <div className="px-10">
                    {data.data.website?.map((web, index) => (
                      <div key={index}>
                        <CardLink
                          target="_blank"
                          style={{wordBreak: 'break-all'}}
                          href={web}
                        >
                          {web}
                        </CardLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="card gutter-b w-100">
          <CardBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className="border-0"
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                >
                  Thông tin cá nhân
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className="border-0"
                  active={active === '3'}
                  onClick={() => {
                    toggle('3')
                  }}
                >
                  Lịch sử tương tác
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className="border-0"
                  active={active === '4'}
                  onClick={() => {
                    toggle('4')
                  }}
                >
                  Gợi ý sản phẩm
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  className="border-0"
                  active={active === '5'}
                  onClick={() => {
                    toggle('5')
                  }}
                >
                  Lịch sử chăm sóc
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="py-50" activeTab={active}>
              <TabPane tabId="1">
                <Table responsive bordered className="w-100">
                  <tbody>
                    {listRight.map(item => (
                      <tr key={item.id}>
                        <td className="w-25">
                          <div className="d-flex align-items-center justify-content-between ">
                            <div className="text-dark-75 text-hover-primary font-weight-bold">
                              {item.label}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="p-0 mb-0">{item.value}</div>
                          <div className="mb-0">{item.element}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {posts?.length > 0 &&
                    posts.map(post => (
                      <Col md="6" key={post.post_id}>
                        <CustomerLeadPostCard
                          post={post}
                          owner={{
                            avatar: prf_picture || image,
                            link: socials_link[0]?.social_link,
                            uid,
                          }}
                        />
                      </Col>
                    ))}
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row className="my-2">
                  {history_action.comments &&
                    history_action.comments.length > 0 && (
                      <Col>
                        <Card className="bg-transparent border-primary shadow-none">
                          <CardBody>
                            <div>
                              {history_action?.comments && (
                                <Badge
                                  color="primary"
                                  className="badge-glow mt-2"
                                >
                                  <MessageCircle size={20} /> bình luận (
                                  {history_action.comments.length})
                                </Badge>
                              )}
                            </div>
                            {history_action.comments
                              .slice(pageHistory * 10, (pageHistory + 1) * 10)
                              .map(comment => (
                                <Card
                                  className="my-2"
                                  key={comment.commenter_id}
                                >
                                  <CardBody className="py-2 px-4">
                                    <Media>
                                      <Media body>
                                        <a
                                          className="text-primary font-weight-bold"
                                          href={comment.commenter_url}
                                          target="blank"
                                        >
                                          {comment.commenter_name}
                                        </a>
                                        <span className="text-muted ml-50 mr-1">
                                          |
                                        </span>
                                        <small className="text-muted">
                                          {comment.cmt_time}
                                        </small>
                                      </Media>
                                    </Media>
                                    <CardText className="blog-content-truncate mt-2">
                                      <a
                                        className="text-secondary font-weight-light font-italic"
                                        href={comment.cmt_url}
                                        target="blank"
                                      >
                                        {comment.cmt_text}
                                      </a>
                                    </CardText>
                                  </CardBody>
                                </Card>
                              ))}
                          </CardBody>
                          {history_action.comments.length > 0 &&
                            renderPagination(
                              history_action.comments,
                              pageHistory,
                              setPageHistory,
                            )}
                        </Card>
                      </Col>
                    )}
                  {history_action.reactions &&
                    history_action.reactions.length > 0 && (
                      <Col>
                        <Card className="bg-transparent border-danger shadow-none">
                          <CardBody>
                            <div>
                              {history_action?.reactions && (
                                <Badge
                                  color="danger"
                                  className="badge-glow mt-2"
                                >
                                  <i className="fa fa-thumbs-up text-white"></i>{' '}
                                  Reaction ({history_action.reactions.length})
                                </Badge>
                              )}
                            </div>
                            <Row>
                              {history_action.reactions
                                .slice(
                                  pageReaction * 10,
                                  (pageReaction + 1) * 10,
                                )
                                .map((reaction, idx) => (
                                  <Col md="4" key={idx}>
                                    <Card className="my-2">
                                      <CardBody className="py-2 px-4">
                                        <Media>
                                          <Media body>
                                            <span>
                                              Loại reaction
                                              <span className="text-muted ml-50 mr-1">
                                                |
                                              </span>
                                              <span className="font-weight-bold">
                                                <i className="fa fa-thumbs-up text-info"></i>
                                                ({reaction.act_name})
                                              </span>
                                            </span>
                                          </Media>
                                        </Media>
                                        <CardText className="blog-content-truncate mt-2">
                                          <a
                                            className="text-secondary font-weight-light font-italic"
                                            href={
                                              'https://www.facebook.com/' +
                                              reaction.act_pst_id
                                            }
                                            target="blank"
                                          >
                                            {reaction.pst_text}
                                          </a>
                                        </CardText>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                ))}
                            </Row>
                          </CardBody>
                          {history_action.reactions.length > 0 &&
                            renderPagination(
                              history_action.reactions,
                              pageReaction,
                              setPageReaction,
                            )}
                        </Card>
                      </Col>
                    )}
                </Row>
              </TabPane>
              <TabPane tabId="4">
                {recommendation_products?.length > 0 ? (
                  <>
                    <Card className="mb-4 w-50">
                      <ListGroup flush>
                        {recommendation_products
                          .slice(pageProduct * 10, (pageProduct + 1) * 10)
                          .map(el => (
                            <ListGroupItem key={`${prf_id}_${el.product_code}`}>
                              <CardLink href={el.product_url} target="blank">
                                {el.product_name}
                              </CardLink>
                            </ListGroupItem>
                          ))}
                      </ListGroup>
                    </Card>
                    {recommendation_products.length > 0 &&
                      renderPagination(
                        recommendation_products,
                        pageProduct,
                        setPageProduct,
                      )}
                  </>
                ) : (
                  <Alert color="primary">
                    <div className="alert-body">
                      <span> Chưa có sản phẩm nào</span>
                    </div>
                  </Alert>
                )}
              </TabPane>
              <TabPane tabId="5">
                <CustomerLeadHistory />
              </TabPane>
            </TabContent>
          </CardBody>
        </div>
      </div>
    </div>
  )
}

export default CustomerLeadsDetail
