import {useModalCtx} from '@services/news-feed-v1/context/create-post'
import React from 'react'
import {ArrowLeft, Upload} from 'react-feather'
import ReactPlayer from 'react-player'
import {Button} from 'reactstrap'
const AddVideoPost = () => {
  const {state, setPositionModal} = useModalCtx()
  return (
    <>
      <div
        onClick={() => {
          setPositionModal(0)
        }}
        className="pt-1 border-bottom pb-2 mb-2 cursor-pointer title-24 text-color-primary-dark"
      >
        <ArrowLeft size={32} className="me-1" />
        Your Videos
      </div>
      <div>
        <ReactPlayer
          width="100%"
          controls={true}
          className="react-player-video"
          url={URL.createObjectURL(state.video[0])}
        />
      </div>
      <div className="text-end mt-2">
        <Button.Ripple
          color="primary"
          onClick={() => {
            setPositionModal(0)
          }}
        >
          <Upload size={14} />
          <span className="align-middle ms-50">Upload</span>
        </Button.Ripple>
      </div>
    </>
  )
}

export default AddVideoPost
