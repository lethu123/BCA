import Avatar from '@core/components/avatar'
import {Fragment} from 'react'
import {Plus} from 'react-feather'
import {useHistory} from 'react-router-dom'
import {Card, CardBody, UncontrolledTooltip} from 'reactstrap'

const GroupCard = ({data, openModal, ...rest}) => {
  const history = useHistory()
  return (
    <>
      <Card
        className="position-relative custom_card_shadow pt-0 h-100 mb-0"
        {...rest}
        key={data.id}
      >
        <div
          style={{width: '100%', height: '130px'}}
          className="position-absolute top-0 start-0"
        >
          <img
            className="w-100 h-100"
            style={{objectFit: 'cover', borderRadius: '8px 8px 0 0'}}
            src={data.bg}
            alt={data.name}
          />
        </div>
        <CardBody className="d-flex flex-column align-items-center text-center">
          <div
            className="d-flex align-items-center justify-content-center mb-1 position-relative groupcard_img"
            style={{zIndex: '2', height: '150px', width: '150px'}}
          >
            <img
              className="rounded-circle"
              style={{
                objectFit: 'cover',
                width: '90%',
                height: '90%',
              }}
              src={
                data.avt ||
                'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
              }
              alt={data.name}
            />
          </div>
          <p
            onClick={() => history.push(`/v1/group/detail/${data.id}`)}
            className="text-center mb-0 cursor-pointer d-inline-block title-20 text-dark"
          >
            {data.name}
          </p>
          <p className="text-center text-15-500-20 mt-1 mb-1">
            {data.typeGroup}
          </p>
          <div className="d-flex align-items-center">
            <div className="avatar-group ml-1">
              {data.member &&
                data.member.slice(0, 4).map((item, idx, arr) => {
                  return (
                    <>
                      <li key={item.id}>
                        <Avatar
                          className="pull-up"
                          img={item.avt}
                          id={item.name.toLowerCase().split(' ').join('-')}
                          imgHeight="26"
                          imgWidth="26"
                        />
                        <UncontrolledTooltip
                          target={item.name.toLowerCase().split(' ').join('-')}
                          placement="top"
                        >
                          {item.name}
                        </UncontrolledTooltip>
                      </li>
                      {arr.length > 3 && idx === 3 && (
                        <li
                          style={{
                            backgroundColor: '#ff6700',
                            width: '26px',
                            height: '26px',
                            zIndex: '10',
                          }}
                          className="rounded-circle d-inline-flex align-items-center justify-content-center cursor-pointer position-relative"
                          onClick={openModal}
                        >
                          <Plus size={15} color="#ffffff" />
                        </li>
                      )}
                    </>
                  )
                })}
            </div>
          </div>
          <ul className="custom-groupcard p-0 mb-0 author-statistics d-flex justify-content-around mt-1">
            <li className="position-relative me-1">
              <p className="cursor-pointer mb-0">
                <span className="item-number">0</span>{' '}
                <span className="item-text">Group Posts</span>
              </p>
            </li>
            <li className="mr-1 ml-1 d-md-none d-lg-block">
              <p className="mb-0">|</p>
            </li>
            <li className="ms-1">
              <p className="cursor-pointer mb-0">
                <span className="item-text">150 Members</span>{' '}
              </p>
            </li>
          </ul>
        </CardBody>
      </Card>
    </>
  )
}

export default GroupCard
