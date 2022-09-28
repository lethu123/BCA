import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import * as Icon from 'react-feather'
import {Row} from 'reactstrap'

export default function MyQuizzesUploadFile({coverImgSub, setFileImgSub}) {
  const [files, setFiles] = useState([])
  useEffect(() => {
    if (coverImgSub) {
      setFiles([...files, {preview: coverImgSub, name: 'cover img sub'}])
    }
  }, [coverImgSub])

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png,image/jpg',
    multiple: false,
    onDrop: acceptedFiles => {
      setFileImgSub(acceptedFiles[0])
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })
  const thumbs = files.map(file => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner text-center">
        <img
          src={file.preview}
          className="dz-img"
          alt={file.name ? file.name : 'img subcategory'}
          width="200"
          height="150"
        />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files],
  )
  return (
    <section className=" p-0">
      <div
        {...getRootProps({className: 'dropzone'})}
        className="py-1 py-md-2 my-1 "
        style={{
          outline: 'none',
          width: '100%',
          border: '2px dashed #ff6700',
        }}
      >
        <input {...getInputProps()} />
        <div className="text-center mb-0">
          <Row
            className="mx-0"
            style={{cursor: 'pointer', justifyContent: 'center'}}
          >
            <Icon.Download
              size={24}
              className=" fonticon-wrap"
              color="#CCCCCC"
            />
            <p className="mb-0">Choose a file</p>
          </Row>
        </div>
      </div>
      <aside className="thumb-container">{thumbs}</aside>
    </section>
  )
}
