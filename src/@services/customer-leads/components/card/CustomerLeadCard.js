import {Badge, Col, CustomInput, Row} from 'reactstrap'

import {Link, useHistory} from 'react-router-dom'

// *** Utils --------------------------------
import {subStr} from 'utility/Utils'

// ** ASSETS --------------------------------
import image from 'assets/images/avatars/avatar-blank.png'

const listFilter = [
  {color: '#67B649', funnel: 'Quan tâm'},
  {color: '#FDEE01', funnel: 'Rất quan tâm'},
  {color: '#e98850', funnel: 'Tiềm năng'},
  {color: '#B20000', funnel: 'Chốt sale'},
  {color: '#00CCFF', funnel: 'Tiếp cận'},
]

// const filterDaTa = data => {
//   const newData = [
//     {label: 'Email', value: data.email_account},
//     {label: 'SĐT', value: data.phone_number},
//     {
//       label: 'Giới tính',
//       value: data.prf_gender ? (data.prf_gender === 'Male' ? 'Nam' : 'Nữ') : '',
//     },
//     {
//       label: 'Học vấn',
//       value: '',
//       element: !isEmpty(data.edu_name) && (
//         <ul className="p-3 mb-0">
//           {Object.keys(data.edu_name).map(
//             (ele, index) =>
//               data.edu_name[ele] && <li key={index}> {data.edu_name[ele]}</li>,
//           )}
//         </ul>
//       ),
//     },
//     {
//       label: 'Làm việc tại',
//       element: data.work_name && (
//         <ul className="p-3 mb-0">
//           {data.work_name.map(
//             (ele, index) => index < 2 && <li key={index}> {ele}</li>,
//           )}
//           {data.work_name.length > 2 && <li>...</li>}
//         </ul>
//       ),
//       value: '',
//     },
//   ]
//   let result = []
//   newData.forEach(item => {
//     if (result.length < 5) {
//       if (item.value || !!item.element) result.push(item)
//     }
//   })

//   return result
// }

const CustomerLeadCard = ({
  item,
  checkTag,
  setDataCheked = () => {},
  datas = [],
}) => {
  const history = useHistory()
  if (!item) return null

  return (
    <div
      className={`card card-custom gutter-b  h-100 mb-0 ${
        checkTag ? 'cursor-pointer' : ''
      }`}
      style={{
        boxShadow:
          checkTag && item.checked
            ? '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
            : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      }}
      onClick={() => {
        if (checkTag) {
          const index = datas.findIndex(ele => ele.id === item.id)

          if (index !== -1) {
            datas[index].checked = !datas[index].checked

            setDataCheked([...datas])
          }
        }
      }}
    >
      {item.fr_name && (
        <div
          className="card-header  justify-content-center py-1 align-items-center "
          style={{
            background:
              listFilter.find(ele => ele.funnel === item?.fr_name)?.color ||
              '#e98850',
          }}
        >
          <h2
            style={{
              textShadow:
                item?.fr_name === 'Rất quan tâm' ? '5px 2px 4px grey' : '',
            }}
            className="text-white mb-0 font-weight-bolder"
          >
            {item.fr_name}
          </h2>
        </div>
      )}

      <div
        className="card-body cursor-pointer"
        onClick={() => {
          const index = datas.findIndex(ele => ele.prf_id === item.prf_id)

          if (index !== -1) {
            datas[index].checked = !datas[index].checked

            setDataCheked([...datas])
          }
        }}
      >
        <div className="d-flex align-items-center mt-2 mb-2 justify-content-between">
          <div className="d-flex align-items-center ">
            <div className="flex-shrink-0 mr-2 mt-lg-0 ">
              <div className="symbol symbol-circle symbol-lg-50">
                <img
                  style={{width: '50px', borderRadius: '50%'}}
                  src={item.prf_picture || image}
                  alt=""
                  onError={e => {
                    e.target.onerror = null
                    e.target.src = image
                  }}
                />
              </div>
            </div>

            <div className="d-flex flex-column">
              <Link
                to={`/admin/potential-customers/user/${item.prf_id}`}
                className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0"
              >
                {item.prf_name || 'Chưa có dữ liệu'}
              </Link>
            </div>
          </div>
          <div>
            <CustomInput
              inline
              type="checkbox"
              id={item.prf_id}
              className="mr-0 ml-2"
              checked={item.checked}
              size="lg"
              onChange={() => {
                const index = datas.findIndex(ele => ele.prf_id === item.prf_id)

                if (index !== -1) {
                  datas[index].checked = !datas[index].checked

                  setDataCheked([...datas])
                }
              }}
            />
          </div>
        </div>
        {item.key_words && item.key_words.interest?.length > 0 && (
          <Row className="mb-3">
            <Col md="12" className="mb-1">
              <span className="font-weight-bolder">Từ khóa:</span>
            </Col>
            <Col md="12">
              {item.key_words.interest.slice(0, 3).map(el => (
                <Badge
                  color="light-primary"
                  key={`${item.id}_${el}`}
                  className="mr-2"
                >
                  {el}
                </Badge>
              ))}
              {item.key_words.interest.length > 3 && (
                <Badge
                  color="light-secondary"
                  key={`${item.id}_viewMore`}
                  className="cursor-pointer font-italic"
                  onClick={() =>
                    history.push(`/admin/potential-customers/user/${item.id}`)
                  }
                >
                  Xem tất cả
                </Badge>
              )}
            </Col>
          </Row>
        )}

        {item.tag_name?.length > 0 && (
          <Row className="mb-1">
            <Col md="12" className="mb-1">
              <span className="font-weight-bolder">Tags:</span>
            </Col>
            <Col md="12">
              {item.tag_name.slice(0, 3).map(el => (
                <Badge
                  color="light-primary"
                  key={`${item.id}_${el}`}
                  className=""
                >
                  {el}
                </Badge>
              ))}
              {item.tag_name.length > 3 && (
                <Badge
                  color="light-secondary"
                  key={`${item.id}_viewMore`}
                  className="cursor-pointer font-italic"
                  onClick={() =>
                    history.push(
                      `/admin/potential-customers/user/${item.prf_id}`,
                    )
                  }
                >
                  Xem tất cả
                </Badge>
              )}
            </Col>
          </Row>
        )}

        {/* {item.recommendation_products?.length > 0 && (
          <Row>
            <Col md="12" className="mb-1 ">
              <span className="font-weight-bolder">Sản phẩm:</span>
            </Col>
            <Col md="12">
              {item.recommendation_products.slice(0, 3).map(el => (
                <Badge
                  color="light-secondary"
                  key={`${item.id}_${el.code}`}
                  className="mr-2 my-1"
                >
                  <CardLink
                    href={el.product_url}
                    target="blank"
                    className="text-primary font-italic"
                  >
                    {el.product_name}
                  </CardLink>
                </Badge>
              ))}

              {item.recommendation_products.length > 3 && (
                <Badge color="light-secondary" className="cursor-pointer">
                  <CardLink
                    href={`/admin/potential-customers/user/${item.id}`}
                    target="blank"
                    className="text-light-primary font-italic"
                  >
                    Xem tất cả
                  </CardLink>
                </Badge>
              )}
            </Col>
          </Row>
        )} */}

        {item.prf_favorite_quotes && (
          <p className="mb-7">{subStr(item.prf_favorite_quotes, 100)}</p>
        )}

        <div>
          <span className="text-dark-75 font-weight-bolder mr-1 w-25">
            Bạn bè:
          </span>
          <span> {item.prf_friend_count || 0} bạn bè</span>
        </div>
        <div>
          <span className="text-dark-75 font-weight-bolder mr-1 w-25">
            Lượt like trung bình:
          </span>
          <span> {item.prf_avg_like || 0} </span>
        </div>
        <div>
          <span className="text-dark-75 font-weight-bolder mr-1 w-25">
            Lượt comment trung bình:
          </span>
          <span> {item.prf_avg_comment || 0} </span>
        </div>

        {/* <div className="mb-7">
          {filterDaTa(item) &&
            filterDaTa(item).map(ele => (
              <Row key={ele.label} className="d-flex justify-content-between">
                <Col md="12">
                  <span className="text-dark-75 font-weight-bolder mr-2 w-25">
                    {ele.label}:
                  </span>
                </Col>
                <Col md="12">
                  <div className="text-muted ">
                    {ele.value && subStr(ele.value, 200)}
                    {ele.element}
                  </div>
                </Col>
              </Row>
            ))}
        </div> */}
      </div>
    </div>
  )
}

export default CustomerLeadCard
