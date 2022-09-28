import Avatar from '@core/components/avatar'
import {Card, CardBody, Row, Col} from 'reactstrap'

const ProfileFriends = ({data}) => {
  // *** function check if img url exists
  // function checkImage(url) {
  //   let srcData =
  //     'https://thumbs.dreamstime.com/b/abstract-sign-avatar-men-icon-male-profile-white-symbol-gray-circle-background-vector-illustration-avatar-144168114.jpg'
  //   var image = new Image()
  //   image.onload = function () {
  //     if (this.width > 0) {
  //       srcData = url
  //     }
  //   }
  //   image.onerror = function () {
  //     image.src = url
  //     return srcData
  //   }
  // }

  // function checkImage(imageSrc, good, bad) {
  //   var img = new Image()
  //   img.onload = good
  //   img.onerror = bad
  //   img.src = imageSrc
  // }

  const renderSuggestion = () => {
    return data?.map(suggestion => (
      <Col md={3} key={suggestion.id}>
        <Card>
          <CardBody>
            <Row>
              <Col md={3}>
                <div className="d-flex justify-content-start">
                  {/* {checkImage(suggestion.profile_picture)} */}
                  <a
                    href={`https://www.facebook.com/${suggestion.id}`}
                    target="_blank "
                  >
                    <Avatar
                      className="mr-75"
                      img={
                        'https://thumbs.dreamstime.com/b/abstract-sign-avatar-men-icon-male-profile-white-symbol-gray-circle-background-vector-illustration-avatar-144168114.jpg'
                      }
                      imgHeight="60"
                      imgWidth="60"
                    />
                  </a>
                </div>
              </Col>
              <Col md={9} className="mt-4">
                <div>
                  <a
                    href={`https://www.facebook.com/${suggestion.id}`}
                    target="_blank "
                  >
                    <h6 className="ml-2 mb-0">{suggestion.name}</h6>
                  </a>
                  <small className="ml-2 text-muted">
                    {suggestion.tagline}
                  </small>
                </div>
              </Col>
              {/* <Col md={3}>
                <div className="ml-auto">
                  <Button.Ripple className="btn-icon" color="primary" size="sm">
                    <UserPlus size={14} />
                  </Button.Ripple>
                </div>
              </Col> */}
            </Row>
          </CardBody>
        </Card>
      </Col>
    ))
  }

  return (
    <CardBody>
      <Row>{renderSuggestion()}</Row>
    </CardBody>
  )
}

export default ProfileFriends
