//**UI */
import {useState} from 'react'

//**Component */
import MyAvatar from '@core/components/avatar/MyAvatar'
import CardToolTip from './../CardToolTip'
import {Link} from 'react-router-dom'

const PostHeader = ({createDate, createHours, data}) => {
  //**State */
  const [openTooltip, setOpenTooltip] = useState(false)

  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <MyAvatar
          style={{width: '40px', height: '40px'}}
          img_alt={data?.name ? data?.name : data?.username}
          onMouseEnter={() => setOpenTooltip(true)}
          onMouseLeave={() => setOpenTooltip(false)}
          img_src={
            data?.avatar
              ? data?.avatar
              : 'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
          }
        />

        <div className="ms-2">
          <div className="d-flex">
            <p
              className="title-16 cursor-pointer"
              onMouseEnter={() => setOpenTooltip(true)}
              onMouseLeave={() => setOpenTooltip(false)}
            >
              {data?.name ? data?.name : data?.username || 'User_name'}
            </p>
          </div>

          <Link to="/">
            {createDate || createHours ? (
              <p className="d-flex align-items-center mt-1 mb-0">
                <span className="text-12 text-color-back60 mr-2">
                  {createDate}
                </span>
                <span className="dot text-12 text-color-back60">
                  {createHours}
                </span>
              </p>
            ) : (
              ''
            )}
          </Link>
        </div>

        <CardToolTip data={data} open={openTooltip} toggle={setOpenTooltip} />
      </div>
    </>
  )
}

export default PostHeader
