import {ArrowLeft} from 'react-feather'
import {Label} from 'reactstrap'
import {useModalCtx} from '@services/news-feed-v1/context/create-post'
import MyDropZoneImg from './MyDropZoneImg'

const AddPhoto = () => {
  const {setPositionModal} = useModalCtx()

  return (
    <>
      <div
        onClick={() => setPositionModal(0)}
        className="pt-1 pb-1 border-bottom mb-1 cursor-pointer title-24 text-color-primary-dark"
      >
        <ArrowLeft size={32} className="mr-1" />
        Add Photo/Video
      </div>
      <div>
        <p className="d-flex align-items-center mb-1">
          <Label className="m-0 mr-1" for="privacy">
            Image
          </Label>
        </p>
        <MyDropZoneImg />
      </div>
    </>
  )
}

export default AddPhoto
