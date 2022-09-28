import {useCallback, useState, useEffect} from 'react'
import {Media, Button, Input} from 'reactstrap'
import FieldLayout from './FieldLayout'

// scss
import './AvatarUploadField.style.scss'

const AvatarUploadField = ({
  name = '',
  defaultImg,
  rectangleImage = false,
  customSize = false,
  onChange = () => {},
  ...rest
}) => {
  const [img, setImg] = useState({file: null, preview: ''})

  useEffect(() => {
    onChange(name, img.file)
  }, [img])

  const renderComponent = useCallback(
    (field, values, meta) => (
      <>
        <Media>
          {(img.preview || defaultImg) && (
            <Media className="mr-1" left href="#">
              <div
                className={`image-input image-input-outline ${
                  customSize ? 'customSize' : ''
                } ${!rectangleImage && 'image-input-circle'}`}
              >
                <div
                  className="image-input-wrapper"
                  style={{backgroundImage: `url(${img.preview || defaultImg})`}}
                ></div>
              </div>
            </Media>
          )}
          <Media className="mt-5 ml-3" body>
            <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
              <Button
                tag="label"
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
                      setImg({
                        preview: URL.createObjectURL(e.target.files[0]),
                        file: e.target.files[0],
                      })
                      e.target.value = null
                    }
                  }}
                  accept="image/*"
                />
              </Button>
              {img.preview && (
                <Button
                  color="danger"
                  tag="label"
                  size="sm"
                  outline
                  onClick={() => {
                    setImg({preview: '', file: null})
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

        {!(img.preview || defaultImg) && (
          <span className="field-error text-danger">
            Bạn phải chọn ảnh <sup style={{color: '#FF0000'}}>(*)</sup>
          </span>
        )}
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [defaultImg, img.preview],
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

export default AvatarUploadField
