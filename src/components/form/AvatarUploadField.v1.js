import React, {useCallback} from 'react'
import {Media, Button, Input} from 'reactstrap'
import FieldLayout from './FieldLayout'

// scss
import './AvatarUploadField.style.scss'

const AvatarUploadFieldV1 = ({
  name = '',
  defaultImg,
  rectangleImage = false,
  customSize = false,
  onChange = () => {},
  file = null,
  module,
  ...rest
}) => {
  const renderComponent = useCallback(
    (field, values, meta) => (
      <>
        <Media>
          {file && (
            <Media className="mr-1" left>
              <div
                className={`image-input image-input-outline ${
                  customSize ? 'customSize' : ''
                } ${!rectangleImage && 'image-input-circle'}`}
              >
                <img
                  className="image-input-wrapper"
                  src={file?.name ? URL.createObjectURL(file) : file}
                  alt="img"
                  style={{objectFit: 'cover'}}
                />
              </div>
            </Media>
          )}
          <Media className="mt-5 ml-3" body>
            <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
              <Button
                tag="label"
                type="button"
                className="mr-1 cursor-pointer"
                color="primary"
                size="sm"
                outline
              >
                Tải ảnh lên
                <Input
                  type="file"
                  id="uploadImg"
                  hidden
                  onChange={e => {
                    if (e.target.files[0]) {
                      onChange(name, e.target.files[0])
                      e.target.value = null
                    }
                  }}
                  accept="image/*"
                />
              </Button>
              {file && (
                <Button
                  color="danger"
                  tag="label"
                  size="sm"
                  outline
                  onClick={() => {
                    onChange(name, null)
                  }}
                >
                  Xóa
                </Button>
              )}
            </div>
            {/* <p className="text-muted mt-50">
              <small>Cho phép ảnh JPG, GIF or PNG. Max size of 800kB</small>
            </p> */}
          </Media>
        </Media>

        {!file && (
          <span className="field-error text-danger">
            Bạn phải chọn ảnh <sup style={{color: '#FF0000'}}>(*)</sup>
          </span>
        )}
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [customSize, file, name, onChange, rectangleImage],
  )
  if (!name) return null
  return (
    <FieldLayout
      renderComponent={renderComponent}
      name={name}
      {...rest}
    ></FieldLayout>
  )
}

export default AvatarUploadFieldV1
