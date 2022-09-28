import {Users} from 'react-feather'

const GroupHeader = () => {
  return (
    <>
      <div className="group-banner d-flex align-items-center p-5 position-relative w-100 mt-2">
        <div className="media d-flex align-items-center">
          <div className="item-icon mr-1">
            <Users color="#ffffff" size={50} />
          </div>
          <div
            className="media-body ml-1 position-relative"
            style={{zIndex: '10'}}
          >
            <h3 className="item-title text-white">All Groups</h3>
            <p className="item-list-tabs text-white mb-0">
              All Groups <span>24</span>
            </p>
          </div>
        </div>
        <div
          style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}
          className="people_img position-absolute "
        >
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/05/shape_7-1.png"
            className="attachment-full size-full"
            alt="people_img"
          />
        </div>
        <div
          style={{bottom: '25px', right: '0'}}
          className="bg_img position-absolute d-none d-xl-block"
        >
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/05/people_2.png"
            className="attachment-full size-full"
            alt="bg_img"
          />
        </div>
      </div>
    </>
  )
}

export default GroupHeader
