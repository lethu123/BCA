import {Badge, Card, CardBody, CardImg} from 'reactstrap'

import Avatar from '@core/components/avatar'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import coverImg from 'assets/images/banner/banner-12.jpg'
import {useHistory} from 'react-router-dom'

const CardAccountFacebook = ({data}) => {
  const history = useHistory()
  return (
    <div className="conttent-body">
      <Card className="card-profile">
        <CardImg className="img-fluid" src={coverImg} top />
        <CardBody>
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <Avatar img={data?.avatar_url || avatar} />
            </div>
          </div>
          <h3
            type="button"
            onClick={() =>
              history.push({
                pathname: `/admin/automation/${data.uid}/about`,
                dataProfile: data,
              })
            }
          >
            <span className="text-primary">{data.username}</span>
          </h3>
          <h6 className="text-muted">Viêt Nam</h6>
          <Badge className="profile-badge" color="light-primary">
            Pro Level
          </Badge>
          <hr className="mb-2" />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="text-muted font-weight-bolder">Bạn bè</h6>
              <h3 className="mb-0">{data.c_friends || '0'}</h3>
            </div>
            <div>
              <h6 className="text-muted ">UIDS</h6>
              <h3 className="mb-0" style={{maxWidth: '100px'}}>
                {/* {data.uid || '0'} */}0
              </h3>
            </div>
            <div>
              <h6 className="text-muted font-weight-bolder">Campaigns</h6>
              <h3 className="mb-0">{data.campaign || '0'}</h3>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
export default CardAccountFacebook
