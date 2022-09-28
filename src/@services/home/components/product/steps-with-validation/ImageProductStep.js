import {Fragment, useState} from 'react'
import {ArrowLeft, ArrowRight, X} from 'react-feather'
import {Button, Input} from 'reactstrap'
// *** Third Library
import ReactPlayer from 'react-player'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {DragDrop} from '@uppy/react'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'

const ImageProductStep = ({stepper, type}) => {
  const [url, setUrl] = useState('')
  // *** Upload Images
  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: {type: 'avatar'},
    autoProceed: true,
    restrictions: {maxNumberOfFiles: 10, allowedFileTypes: ['image/*']},
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })
  const handleRemoveImg = index => {
    let item1 = previewArr.filter((it, idx) => idx !== index)
    setPreviewArr(item1)
  }
  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => (
        <div className="position-relative d-inline-block mr-7">
          <span
            className="badge-up badge badge-primary badge-pill cursor-pointer"
            style={{top: 0, right: 0, width: 10, height: 10}}
            onClick={() => handleRemoveImg(index)}
          >
            <X size="15" />
          </span>
          <img
            key={index}
            className="rounded mt-2 mr-1"
            src={src}
            alt="avatar"
            style={{width: 130, height: 130}}
          />
        </div>
      ))
    } else {
      return null
    }
  }

  return (
    <Fragment>
      <div className="content-header">
        <h4 className="mb-0 text-primary">Hình ảnh sản phẩm</h4>
      </div>
      <div className="imageProductStep">
        <h5>
          Hình ảnh sản phẩm <span style={{color: 'rgb(234, 84, 85)'}}>*</span>
        </h5>
        <DragDrop uppy={uppy} />
        <span
          className="text-danger mt-2"
          style={{display: previewArr.length === 0 ? 'block' : 'none'}}
        >
          Vui lòng chọn ảnh sản phẩm
        </span>
        {renderPreview()}
      </div>
      <div className="mt-20">
        <h5>Video sản phẩm(Nếu có)</h5>
        <Input
          type="text"
          placeholder="Nhập đường dẫn giới thiệu sản phẩm ..."
          onChange={e => setUrl(e.target.value)}
        />
        <div style={{display: url === '' ? 'none' : 'block'}}>
          <ReactPlayer
            url={url}
            className="react-player-video my-2 rounded overflow-hidden mx-auto"
            width="600px"
            height="330px"
            controls={true}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-20">
        <Button.Ripple color="primary" onClick={() => stepper.previous()}>
          <ArrowLeft size={14} className="align-middle mr-5 " />
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          type="submit"
          color="primary"
          className="btn-next"
          disabled={previewArr.length === 0 && true}
          onClick={() => stepper.next()}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight size={14} className="align-middle ml-5"></ArrowRight>
        </Button.Ripple>
      </div>
    </Fragment>
  )
}

export default ImageProductStep
