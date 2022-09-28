/* eslint-disable react/jsx-no-target-blank */
import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {XCircle, DownloadCloud} from 'react-feather'
import doc from 'assets/images/icons/doc.png'
import xls from 'assets/images/icons/xls.png'
import pdf from 'assets/images/icons/pdf.png'
import txt from 'assets/images/icons/txt.png'
import pptx from 'assets/images/icons/pptx.png'
import {FormGroup, Label} from 'reactstrap'

const handleTypeFile = name => {
  let arr = name.split('.')
  return arr[arr.length - 1]
}

export default function UploadFile({
  onChange = () => {},
  label,
  isRequired,
  defaultValues,
  name,
  accept = '.doc,.docx,.txt,.pdf,.pptx,.xlsx,.xls,.csv',
}) {
  const [files, setFiles] = useState([])
  const [defaultUpdateArr, setDefaultUpdateArr] = useState([])
  const [imgDeleteArr, setImageDeleteArr] = useState([])

  const {getRootProps, getInputProps} = useDropzone({
    multiple: true,
    accept,
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

  useEffect(() => {
    if (files.length > 0) {
      onChange(name, files)
    }
  }, [files])

  useEffect(() => {
    if (defaultValues && defaultValues.length > 0) {
      setDefaultUpdateArr(defaultValues)
    }
  }, [defaultValues])

  useEffect(() => {
    if (imgDeleteArr && imgDeleteArr.length > 0) {
      onChange('documents_delete', imgDeleteArr)
    }
  }, [imgDeleteArr])

  const handleDeleteDoc = useCallback(
    item => {
      setFiles(files.filter(file => file.name !== item.name))
    },
    [files],
  )

  const handleRemoveCurrentImg = useCallback(
    (index, file) => {
      setDefaultUpdateArr(defaultUpdateArr.filter((_, idx) => idx !== index))

      setImageDeleteArr([...imgDeleteArr, file.id])
    },
    [defaultUpdateArr, imgDeleteArr],
  )

  const generateThumbs = () => (
    <>
      {defaultUpdateArr.map((file, index) => (
        <div key={index}>
          <div md={4} className="d-flex mr-1">
            <img
              src={
                handleTypeFile(file.name) === 'doc' ||
                handleTypeFile(file.name) === 'docx'
                  ? doc
                  : handleTypeFile(file.name) === 'xlsx' ||
                    handleTypeFile(file.name) === 'xls'
                  ? xls
                  : handleTypeFile(file.name) === 'pdf'
                  ? pdf
                  : handleTypeFile(file.name) === 'txt'
                  ? txt
                  : handleTypeFile(file.name) === 'pptx'
                  ? pptx
                  : 'https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png'
              }
              className="dz-img mr-1"
              alt={file.name}
              style={{width: '20px', height: '25px'}}
            />
            <p style={{fontWeight: 'bold'}}>{file.name}</p>
            <XCircle
              className="ml-50"
              style={{color: '#FF6700', cursor: 'pointer'}}
              onClick={() => handleRemoveCurrentImg(index, file)}
            />
          </div>
        </div>
      ))}
      {files.length > 0 &&
        files.map((file, index) => (
          <div key={index}>
            <div>
              <div md={4} className="d-flex mr-1">
                <img
                  src={
                    handleTypeFile(file.name) === 'doc' ||
                    handleTypeFile(file.name) === 'docx'
                      ? doc
                      : handleTypeFile(file.name) === 'xlsx' ||
                        handleTypeFile(file.name) === 'xls'
                      ? xls
                      : handleTypeFile(file.name) === 'pdf'
                      ? pdf
                      : handleTypeFile(file.name) === 'txt'
                      ? txt
                      : handleTypeFile(file.name) === 'pptx'
                      ? pptx
                      : 'https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png'
                  }
                  className="dz-img mr-1"
                  alt={file.name}
                  style={{width: '30px', height: '40px'}}
                />
                <p style={{fontWeight: 'bold', marginTop: '10px'}}>
                  {file.name}
                </p>
                <XCircle
                  className="ml-50"
                  style={{
                    color: '#FF6700',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                  onClick={() => handleDeleteDoc(file)}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  )

  return (
    <FormGroup>
      <Label for={name} className="font-weight-bold text-dark">
        {label} {isRequired && <sup style={{color: '#FF0000'}}>*</sup>}
      </Label>
      <div
        {...getRootProps({className: 'dropzone'})}
        className="py-1 py-md-2 uploadFile"
        style={{
          width: '100%',
          outline: 'none',
          border: '2px dashed #1EAC52',
        }}
      >
        <input {...getInputProps()} />
        <div className="text-center mb-0">
          <DownloadCloud size={45} className=" fonticon-wrap" color="#CCCCCC" />
          <p className="mb-0">Drop File or Browse</p>
        </div>
      </div>
      <aside className="thumb-container">{generateThumbs()}</aside>
    </FormGroup>
  )
}
