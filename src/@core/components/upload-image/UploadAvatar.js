import {useState} from 'react'
import {Input, Label} from 'reactstrap'
import {Camera} from 'react-feather'
import {dataURItoBlob, uploadMedia} from '@services/ultils'
import ModalUpload from './ModalUpload'

const UploadAvatar = ({onUpdate = () => {}}) => {
  const [image, setImage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const onChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files?.[0])
      setIsOpen(true)
    }
  }

  const handleUpload = async blob => {
    const file = dataURItoBlob(blob)
    const ava = await uploadMedia(file)
    onUpdate(ava)
    setIsOpen(false)
  }

  return (
    <>
      <Label
        className="position-absolute rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
        style={{
          bottom: '-13px',
          right: '-13px',
          width: '25px',
          height: '25px',
          backgroundColor: 'gray',
        }}
        for={'uploadAvatarRef'}
      >
        <Camera size={15} fill="#ffffff" />
        <Input
          type="file"
          id="uploadAvatarRef"
          onChange={e => {
            onChange(e)
          }}
          hidden
          accept="image/*"
        />
      </Label>

      <ModalUpload
        open={isOpen}
        toggle={() => {
          setIsOpen(!isOpen)
        }}
        avatar={image}
        handleUpload={blob => handleUpload(blob)}
      />
    </>
  )
}

export default UploadAvatar
