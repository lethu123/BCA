//**UI */
import {Button, Card, CardBody} from 'reactstrap'

//**Component */
import CreatePostDetail from './modal/CreatePostDetail'

//**Ctx */
import {useModalCtx} from '@services/news-feed-v1/context/create-post'

const CreatePost = ({title = 'What’s new with you?'}) => {
  // *** State context
  const {toggleModaAction, setPositionModal, setHashTag} = useModalCtx()
  return (
    <>
      <Card>
        <CardBody>
          <div className="d-flex">
            <div style={{width: '70px'}}>
              <img
                width={60}
                height={60}
                className="rounded-circle"
                style={{objectFit: 'cover'}}
                alt="avt-create-post"
                src="https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg"
              />
            </div>
            <p
              className={`p-2 ml-2 rounded d-flex align-items-center cursor-pointer title-16-bold`}
              style={{
                backgroundColor: '#f4f5f4',
                width: 'calc(100% - 60px - 1.5rem',
              }}
              onClick={() => {
                toggleModaAction(true)
                setPositionModal(0)
                setHashTag([])
              }}
            >
              {title}
            </p>
          </div>
          <div
            className="mt-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,auto)',
              columnGap: '16px',
            }}
          >
            <Button.Ripple
              onClick={() => {
                toggleModaAction(true)
                setPositionModal(1)
              }}
              color="flat-gray"
              className="custom-hover-shinny title-16-bold"
            >
              <i className="fa-solid fa-user-group"></i> Friends
            </Button.Ripple>
            <Button.Ripple
              onClick={() => {
                toggleModaAction(true)
                setPositionModal(2)
              }}
              color="flat-gray"
              className="custom-hover-shinny title-16-bold"
            >
              <i className="fa-solid fa-images"></i> Images
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
      <CreatePostDetail />
    </>
  )
}

export default CreatePost
