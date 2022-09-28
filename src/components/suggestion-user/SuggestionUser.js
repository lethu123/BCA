import {MessageSquare, UserPlus} from 'react-feather'
import {Card, CardBody} from 'reactstrap'

// ** Image
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import avatarUser5 from 'assets/media/svg/avatars/003-girl-1.svg'
import avatarUser6 from 'assets/media/svg/avatars/004-boy-1.svg'

const SuggestionUser = ({data}) => {
  return (
    <Card>
      <CardBody>
        <h5>Gợi ý</h5>
        <p>Những người bạn có thể quen</p>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{marginBottom: 15}}
        >
          <div className="d-flex align-items-center">
            <img
              src={avatarUser3}
              alt="images"
              style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                marginRight: 10,
              }}
            />
            <div>
              <p className="mb-0 text-primary">Kendall Lawrices</p>
              <small>kendall@gmail.com</small>
            </div>
          </div>
          <div style={{marginRight: 10}}>
            <UserPlus size={17} style={{cursor: 'pointer'}} />
            <MessageSquare
              size={17}
              style={{marginLeft: 7, cursor: 'pointer'}}
            />
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-between"
          style={{marginBottom: '15px'}}
        >
          <div className="d-flex align-items-center">
            <img
              src={avatarUser4}
              alt="images"
              style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                marginRight: 10,
              }}
            />
            <div>
              <p className="mb-0 text-primary">Doja Kissnger</p>
              <small>kendall@gmail.com</small>
            </div>
          </div>
          <div style={{marginRight: 10}}>
            <UserPlus size={17} style={{cursor: 'pointer'}} />
            <MessageSquare
              size={17}
              style={{marginLeft: 7, cursor: 'pointer'}}
            />
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-between"
          style={{marginBottom: '15px'}}
        >
          <div className="d-flex align-items-center">
            <img
              src={avatarUser5}
              alt="images"
              style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                marginRight: 10,
              }}
            />
            <div>
              <p className="mb-0 text-primary">Prity Anne</p>
              <small>anne@gmail.com</small>
            </div>
          </div>
          <div style={{marginRight: 10}}>
            <UserPlus size={17} style={{cursor: 'pointer'}} />
            <MessageSquare
              size={17}
              style={{marginLeft: 7, cursor: 'pointer'}}
            />
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-between"
          style={{marginBottom: '15px'}}
        >
          <div className="d-flex align-items-center">
            <img
              src={avatarUser6}
              alt="images"
              style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                marginRight: 10,
              }}
            />
            <div>
              <p className="mb-0 text-primary">David Devel</p>
              <small>devel@gmail.com</small>
            </div>
          </div>
          <div style={{marginRight: 10}}>
            <UserPlus size={17} style={{cursor: 'pointer'}} />
            <MessageSquare
              size={17}
              style={{marginLeft: 7, cursor: 'pointer'}}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default SuggestionUser
