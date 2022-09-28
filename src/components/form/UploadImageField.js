import {ErrorMessage} from 'formik'
import Uppy from '@uppy/core'
import {DragDrop} from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {Card, Row, Label, FormGroup, Badge, Col} from 'reactstrap'
import {useCallback, useState} from 'react'
import {X} from 'react-feather'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'

const UploadImageField = ({
  onChange,
  name = '',
  label,
  isRequired = false,
  isMulti = false,
  files = [],
  // [{
  //  name:'avatar', data: 'https://....' EDIT
  // }]
  maxFile,
  height,
  width,
  colMd,
  colLg,
}) => {
  const uppy = new Uppy({
    meta: {type: 'avatar'},
    autoProceed: true,
    restrictions: {
      allowedFileTypes: ['image/*'],
      maxNumberOfFiles: isMulti ? maxFile : 1,
    },
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    // ------- Custom max file --------
    if (isMulti) {
      let arrNames = files.map(file => file.name)
      if (!arrNames.includes(file.name)) {
        files.push(file)

        onChange(
          name,
          maxFile && maxFile < files.length
            ? [...files.slice(files.length - maxFile)]
            : [...files],
        )
      }
    } else {
      onChange(name, [file])
    }
  })
  console.log('files upload', files)
  // *** Delete img
  const handleRemoveImg = useCallback(
    file => {
      const res = files.filter(f => f.name !== file.name)

      onChange(name, res)
    },
    [onChange, name, files],
  )

  const renderImgPreviews = useCallback(() => {
    if (files[0] && files.length > 0) {
      return files.map(file => (
        <Col md={colMd || 12} lg={colLg || 6} key={file.name}>
          <div
            key={file.id || file.name}
            className="mr-3 mt-3 ml-3 position-relative"
          >
            <Card
              className="my-2 image-field position-relative w-100"
              style={{display: 'inline-block'}}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -7,
                  right: -10,
                  zIndex: 9,
                  cursor: 'pointer',
                }}
                onClick={() => handleRemoveImg(file)}
              >
                <Badge color="primary" pill>
                  <X />
                </Badge>
              </div>
              <img
                src={file.preview ? file.preview : file.data}
                // src={file}
                alt={file.name}
                className="rounded w-100"
                // height={height || '200px'}
              />
            </Card>
          </div>
        </Col>
      ))
    } else {
      return null
    }
  }, [colLg, colMd, files, handleRemoveImg])

  return (
    <FormGroup>
      <Label for={name} className="font-weight-bold text-dark">
        {label} {isRequired && <sup style={{color: '#FF0000'}}>*</sup>}
      </Label>
      <div>
        <DragDrop height={height} uppy={uppy} />
        <Row>{renderImgPreviews()}</Row>
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="field-error text-danger"
      />
    </FormGroup>
  )
}

export default UploadImageField
