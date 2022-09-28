// ** React Imports
import {useState, Fragment, useCallback} from 'react'

// ** Reactstrap Imports
import {Button, ListGroup, ListGroupItem} from 'reactstrap'

// ** Third Party Imports
// import toast from 'react-hot-toast'
import {useDropzone} from 'react-dropzone'
import {X} from 'react-feather'
import {useModalCtx} from '@services/news-feed-v1/context/create-post'

const MyDropZoneImg = ({file}) => {
  const {
    state: {post_id},
  } = useModalCtx()
  // ** State
  const [files, setFiles] = useState([])
  const {setAddPhoto, setPositionModal, setIdPost} = useModalCtx()
  const {getRootProps, getInputProps} = useDropzone({
    multiple: true,
    accept: {
      'image/*': ['.jpg', '.png', '.gif', '.jpeg'],
    },
    maxFiles: 100,
    maxSize: 1048576 * 10,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        // toast.error('Maximum 100 files and 10MB/file')
      } else {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
      }
    },
  })
  // console.log('file', files)
  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const renderFileSize = size => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  }

  console.log('files', files)

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">
          <img
            className="rounded"
            alt={file.name}
            src={file.name ? URL.createObjectURL(file) : file}
            height="28"
            width="28"
          />
        </div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  const handleSubmitImg = useCallback(() => {
    setAddPhoto(
      files.map(f => ({
        name: f.name,
        file: f,
        preview: URL.createObjectURL(f),
        url: null,
      })),
    )
    setPositionModal(0)
    setIdPost(null)
  }, [files, setAddPhoto, setIdPost, setPositionModal])

  return (
    <>
      <div
        style={{border: '1px dotted #999999'}}
        className="cursor-pointer p-2 d-flex align-items-center justify-content-center rounded"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <div className="mb-2">
            <img
              style={{width: '48px', height: '48px'}}
              src="https://res.cloudinary.com/cloudhspace/image/upload/v1650883177/dev.hspace.biz/create-page/attach_ubmdmm.svg"
              alt="attach"
            />
          </div>
          <p className="title-16-700-24 text-color-primary-dark">
            Drop Files here or click to upload
          </p>
          <p className="text-12-600 text-color-back60 my-1">
            Maximum 100 files, 10MB/file
          </p>
          <p className="text-14-600 text-color-back60">
            Drop Files here or click
            <span className="text-warning text-14"> browse </span>
            through your machine
          </p>
        </div>
      </div>
      {files.length ? (
        <Fragment>
          <ListGroup className="my-2">{fileList}</ListGroup>
          <div className="d-flex justify-content-end">
            <Button
              className="me-1"
              color="danger"
              outline
              onClick={handleRemoveAllFiles}
            >
              Remove All
            </Button>
            <Button onClick={() => handleSubmitImg()} color="primary">
              Upload Files
            </Button>
          </div>
        </Fragment>
      ) : null}
    </>
  )
}

export default MyDropZoneImg
