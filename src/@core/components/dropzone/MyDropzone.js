
import {Fragment, useState} from 'react'

//**Third party */
import {useDropzone} from 'react-dropzone'
import {FileText, X} from 'react-feather'

import {Button, ListGroup, ListGroupItem} from 'reactstrap'
import {useEffect} from 'react'

const MyDropzone = ({
  onChange = () => {},
  name,
  type = 'file',
  multiple = true,
  linksMedia = [],
}) => {
  // ** State
  const [files, setFiles] = useState([])
  const [links, setLinks] = useState([])

  useEffect(() => {
    if (linksMedia?.length) {
      setLinks(linksMedia)
    }
  }, [linksMedia])

  const {getRootProps, getInputProps} = useDropzone({
    multiple: multiple,
    maxFiles: 1000,
    maxSize: 10000000,
    // accept: type === 'image' ? 'image/*' : '',
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        
      } else {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
        if (!multiple) setLinks([])
      }
    },
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      )
    } else {
      return <FileText size="28" />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
    setLinks([])
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
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
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

  const handleRemoveLink = link => {
    setLinks(links.filter(it => it !== link))
  }

  const linkList =
    links?.length > 0 &&
    links?.map((link, index) => (
      <ListGroupItem
        key={`${link}-${index}`}
        className="d-flex align-items-center justify-content-between"
      >
        <div className="file-details d-flex align-items-center">
          <div className="file-preview me-1">
            {type === 'image' ? (
              <img
                className="rounded"
                alt="not found"
                src={link}
                height="28"
                width="28"
              />
            ) : (
              <FileText size="28" />
            )}
          </div>
        </div>
        <Button
          color="danger"
          outline
          size="sm"
          className="btn-icon"
          onClick={() => {
            handleRemoveLink(link)
          }}
        >
          <X size={14} />
        </Button>
      </ListGroupItem>
    ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  useEffect(() => {
    onChange(name, {
      files,
      links,
    })
  }, [files, links])

  return (
    <>
      <div
        style={{border: '1px dotted #999999'}}
        className="cursor-pointer p-3 d-flex align-items-center justify-content-center rounded"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <div className="mb-2">
            <img
              width={48}
              height={48}
              src={
                type === 'image'
                  ? 'https://res.cloudinary.com/cloudhspace/image/upload/v1652258045/dev.hspace.biz/user-profile/name.picture.image_zxzn1j.svg'
                  : 'https://res.cloudinary.com/cloudhspace/image/upload/v1650883177/dev.hspace.biz/create-page/attach_ubmdmm.svg'
              }
              alt="attach"
            />
          </div>
          <h6 className=" mb-2 text-color-primary-dark">
            Drop Files here or click to upload
          </h6>
          <h5 className=" text-color-back60">
            Drop Files here or click{' '}
            <span className="text-warning text-14"> browse </span> through your
            machine
          </h5>
        </div>
      </div>
      {links.length ? (
        <Fragment>
          <ListGroup className="my-2">{linkList}</ListGroup>
        </Fragment>
      ) : null}

      {files.length ? (
        <Fragment>
          <ListGroup className="my-2">{fileList}</ListGroup>
        </Fragment>
      ) : null}

      {links.length + files.length > 1 && (
        <div className="d-flex justify-content-end">
          <Button
            className="me-1"
            color="danger"
            outline
            onClick={handleRemoveAllFiles}
          >
            Remove All
          </Button>
        </div>
      )}
    </>
  )
}

export default MyDropzone
