// ** Reactstrap Imports
import {Button, ListGroup, ListGroupItem, Label} from 'reactstrap'

// ** Third Party Imports
import toast from 'react-hot-toast'
import {useDropzone} from 'react-dropzone'
import {X, DownloadCloud} from 'react-feather'

// ** Styles
import '@core/scss/react/libs/file-uploader/file-uploader.scss'

const FileUploadField = ({
  name,
  id,
  label,
  required,
  multiple,
  accept = 'image/*',
  maxFiles = 100,
  maxSize = 1048576 * 10,
  value: files = [],
  onChange: setFiles = () => {},
  ...rest
}) => {
  // ** State

  const {getRootProps, getInputProps} = useDropzone({
    multiple,
    accept,
    maxFiles,
    maxSize,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        toast.error('You can only upload image Files!.')
      } else {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
      }
    },
  })

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
            src={URL.createObjectURL(file)}
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

  return (
    <>
      {label && (
        <Label className="form-label">
          {label}{' '}
          {required && (
            <sup
              style={{
                color: '#FF0000',
                fontSize: '1rem',
                top: '0',
              }}
            >
              *
            </sup>
          )}
        </Label>
      )}
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className="d-flex align-items-center justify-content-center flex-column">
          <DownloadCloud size={64} />
          <h5>Drop Files here or click to upload</h5>
          <p className="text-secondary">
            Drop files here or click{' '}
            <a href="/" onClick={e => e.preventDefault()}>
              browse
            </a>{' '}
            thorough your machine
          </p>
        </div>
      </div>

      {files.length ? (
        <>
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
            {/* <Button color="primary">Upload Files</Button> */}
          </div>
        </>
      ) : null}
    </>
  )
}

export default FileUploadField
