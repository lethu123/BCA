import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import * as Icon from 'react-feather'
import './EditDetalCanvas.style.scss'

export default function EditDetalCanvasUploadFile() {
  const [files, setFiles] = useState([])
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
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
      <div className="dz-thumb-inner">
        <img
          src={file.preview}
          className="dz-img"
          alt={file.name}
          style={{width: '100px'}}
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
    <section className="sectionUploadFile p-0 mb-2">
      <div
        {...getRootProps({className: 'dropzone'})}
        className="py-1 py-md-2 uploadFile"
        style={{
          width: '100%',
          outline: 'none',
          border: '2px dashed #ff6700',
        }}
      >
        <input {...getInputProps()} />
        <div className="text-center mb-0">
          <Icon.DownloadCloud
            size={45}
            className=" fonticon-wrap"
            color="#CCCCCC"
          />
          <p className="mb-0">Drop File or Browse</p>
        </div>
      </div>
      <aside className="thumb-container">{thumbs}</aside>
    </section>
  )
}
