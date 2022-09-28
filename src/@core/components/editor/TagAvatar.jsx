const TagAvatar = ({data}) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="me-2" style={{width: '40px', height: '40px'}}>
          <img
            src={
              data?.avatar ||
              'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
            }
            alt=""
            className="w-100 h-100 rounded-circle"
            style={{objectFit: 'cover'}}
          />
        </div>
        <div>
          <p className="text-12">{data?.name || data?.username || 'User'}</p>
          <p className="text-12-500-16">Friend : {data?.c_follower || '0'}</p>
        </div>
      </div>
    </>
  )
}

export default TagAvatar
