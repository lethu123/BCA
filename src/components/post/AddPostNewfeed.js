import {Card, CardBody, Form} from 'reactstrap'
import Avatar from '@core/components/avatar'
import {useState} from 'react'
// ** component
import ModalAddPost from 'components/post/ModalAddPost'

// ** assets
// import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import avatar from 'assets/images/avatars/avatar-blank.png'
import Button from 'reactstrap/lib/Button'

const AddPostNewfeed = ({value}) => {
  const [isOpen, setIsOpen] = useState(false)
  const userLogin =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))
  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <Avatar
              className="mr-1"
              img={(userLogin && userLogin.avatar) || avatar}
              size="lg"
              style={{flexBasis: '5%'}}
            />
            <Form style={{flexBasis: '95%'}}>
              <Button
                className="round cursor-pointer"
                block
                color="light"
                style={{
                  backgroundColor: '#f1f3f4',
                  borderColor: '#f1f3f4',
                  borderRadius: '1.5rem',
                }}
                onClick={() => {
                  setIsOpen(true)
                }}
              >
                {value}
              </Button>
            </Form>
          </div>
        </CardBody>
      </Card>
      <ModalAddPost isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default AddPostNewfeed
