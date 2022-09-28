import {Card, CardBody, Form} from 'reactstrap'
import {useState} from 'react'
// ** component
import ModalAddPost from '@services/post/components/modal/ModalAddPost'
import Button from 'reactstrap/lib/Button'

import {UserQuery} from '@services/profile'
// ** assets

import avatar from 'assets/images/avatars/avatar-blank.png'

const AddPostNewfeed = ({value, groupId = null}) => {
  const userLogin =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))

  // *** Query
  const {data: userProfile} = UserQuery.useGetUserProfile(userLogin?.uid)

  // *** State
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div className="symbol symbol-40 symbol-light-success mr-1">
              <span>
                <img
                  src={userProfile?.data?.avatar_url || avatar}
                  className="align-self-end"
                  alt="imgAvatar"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    marginTop: 5,
                    objectFit: 'cover',
                  }}
                  onError={e => {
                    e.target.onerror = null
                    e.target.src = avatar
                  }}
                />
              </span>
            </div>
            <Form style={{flexBasis: '95%', marginBottom: 5}}>
              <Button
                className="round cursor-pointer text-left pl-2"
                block
                color="light"
                style={{
                  backgroundColor: '#f1f3f4',
                  borderColor: '#f1f3f4',
                  borderRadius: 7,
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
      <ModalAddPost isOpen={isOpen} setIsOpen={setIsOpen} groupId={groupId} />
    </div>
  )
}

export default AddPostNewfeed
