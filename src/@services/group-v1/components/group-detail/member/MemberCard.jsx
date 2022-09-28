//**UI */
import {useRouter} from 'next/router'
import {Clipboard, MoreVertical, Navigation} from 'react-feather'
import {Card, CardBody} from 'reactstrap'

//**Component */
import MyBadge from '@core/components/badge/MyBadge'

const MemberCard = ({data, ...rest}) => {
  const router = useRouter()
  return (
    <>
      <Card
        className="position-relative custom_card_shadow pt-0 h-100 mb-0"
        {...rest}
      >
        <div
          className="cursor-pointer"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
          }}
        >
          <MoreVertical size={20} />
        </div>
        <div
          style={{width: '100%', height: '130px'}}
          className="position-absolute top-0 start-0"
        >
          <img
            className="w-100 h-100"
            style={{objectFit: 'cover', borderRadius: '8px 8px 0 0'}}
            src={
              data.cover ||
              'https://i.pinimg.com/originals/65/bc/b8/65bcb85e46e5a768e53851d70ef61586.jpg'
            }
            alt={data.name}
          />
        </div>
        <CardBody className="d-flex flex-column">
          <div
            className="d-flex align-items-center justify-content-center mb-2 position-relative"
            style={{zIndex: '2'}}
          >
            <img
              style={{
                objectFit: 'cover',
                height: '150px',
                width: '150px',
                borderRadius: '50%',
              }}
              src={
                data.avatar ||
                'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
              }
              alt={data.name}
            />
          </div>
          <p
            onClick={() => router.push(`/profile/${data.user_id}?tab=post`)}
            className="text-center title-16-700-24 cursor-pointer d-inline-block"
          >
            {data.name || data.username}
          </p>
          <br />
          {data.location && (
            <p className="text-12-600-16 text-color-back40 mb-1">
              <Navigation className="me-1" size={16} />
              {data.location}
            </p>
          )}
          {data.experiences?.length > 0 &&
            data.experiences.map((item, i, index) =>
              i + 1 === index.length ? (
                <p className="text-12-600-16 text-color-back40 mb-1">
                  <Clipboard className="me-1" size={16} /> {item.description} at{' '}
                  {item.company_name}
                </p>
              ) : (
                ''
              ),
            )}
          <p className="mb-1">
            <span className="text-12-600-16 me-2">
              {data.c_follower > 0 ? data.c_follower : 0} Followers
            </span>
            {/* <span className="dot text-12-600-16 me-2">
                    {item.project} Projects
                  </span>
                  <span className="dot text-12-600-16">{item.jobs} Jobs</span> */}
          </p>
          <div className="mb-1">
            {data.skills?.length > 0 &&
              data.skills?.map((item, index) =>
                index < 2 ? (
                  <MyBadge
                    textcl="#1C3218"
                    color="gray-1"
                    key={item.id}
                    text={item.content}
                    className="me-1 text-12"
                  />
                ) : (
                  ''
                ),
              )}{' '}
            {data.skills?.length > 2 && (
              <MyBadge
                textcl="#1C3218"
                color="gray-1"
                text={`+${data.skills.length - 2} Skills`}
                className="mb-0 text-12"
              />
            )}
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default MemberCard
