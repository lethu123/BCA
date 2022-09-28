import React, {useEffect, useRef, useState} from 'react'

import './EmailEditor.style.scss'
import template_1 from './data/email_template_1.json'
// import template_2 from './data/email_template_2.json'

import EmailEditor from 'react-email-editor'
import {Alert, Badge, Button} from 'reactstrap'
import {AlertCircle, Eye, EyeOff} from 'react-feather'

// *** component
import ModalCreateTemplateEmail from '../modal/ModalCreateTemplateEmail'

// convert html to image
// import * as htmlToImage from 'html-to-image'
// import {toPng} from 'html-to-image'

const LIST_KEYS = ['FULLNAME', 'EMAIL', 'PHONE', 'ADDRESS', 'LINKS']

const EmailEditorComponent = () => {
  const emailEditorRef = useRef(null)

  const [initialData, setInitialData] = useState(template_1)
  const [keys, setKeys] = useState([])
  const [value, setValue] = useState(null)
  const [showVariable, setShowVariable] = useState(true)
  const [err, setErr] = useState([])

  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const [saveDesignHTML, setSaveDesignHTML] = useState('')

  useEffect(() => {
    console.log('VALUe', value)
    if (value?.key) {
      let ids = keys.map(k => k.id)
      if (ids.includes(value.id)) {
        setKeys(datas =>
          datas.map(dt => {
            if (dt.id === value.id) {
              return {...dt, ...value}
            } else {
              return dt
            }
          }),
        )
      } else {
        setKeys(datas => [...datas, value])
      }
    } else {
      setKeys(key => key.filter(ele => ele.id !== value.id))
    }
  }, [value])

  useEffect(() => {
    if (keys.length > 0) {
      let arr = []
      const arrKey = keys.map(ele => ele.key)

      arrKey.forEach(ele => {
        if (!LIST_KEYS.includes(ele.toLowerCase())) {
          arr.push(`{{${ele}}}`)
        }
      })
      setErr(arr)
    } else {
      setErr([])
    }
  }, [keys])

  // const exportHtml = () => {
  //   emailEditorRef.current.editor.exportHtml(data => {
  //     const {design, html} = data
  //     console.log('emailEditorRef 2', emailEditorRef)
  //     console.log('exportHtml', html)
  //   })
  // }

  const saveDesign = () => {
    // save design
    emailEditorRef.current.editor.saveDesign(design => {
      const designString = JSON.stringify(design, null, 4)

      // console.log('saveDesign', JSON.stringify(design, null, 4))
    })
    // export HTML
    emailEditorRef.current.editor.exportHtml(data => {
      const {design, html} = data
      // console.log('emailEditorRef 2', emailEditorRef)
      setSaveDesignHTML(
        html.substring(html.indexOf('<body'), html.indexOf('</body>')),
      )
      toggleModal()
    })
  }

  const onDesignLoad = data => {
    console.log('onDesignLoad', data)
  }

  const handleOnChangeText = data => {
    // console.log('DATA', data)
    let type = data?.changes?.name
    if (type === 'text') {
      let valueChange = data?.changes?.value
      let id = data?.item.values?._meta?.htmlID
      console.log('valueChange', valueChange)

      const firstIndex = valueChange.indexOf('{')
      const lastIndex = valueChange.lastIndexOf('}')

      const dataChange =
        firstIndex !== -1 &&
        lastIndex !== -1 &&
        valueChange
          .slice(firstIndex + 2, lastIndex - 1)
          .trim()
          .replaceAll('{', '')
          .replaceAll('}', '')

      if (dataChange) {
        setValue({id, key: dataChange})
      } else {
        setValue({id, key: null})
      }
    }
  }

  const onLoad = () => {
    if (emailEditorRef.current) {
      emailEditorRef.current.editor.loadDesign(initialData)
      emailEditorRef.current.editor.addEventListener('design:updated', data =>
        handleOnChangeText(data),
      )
      emailEditorRef.current.editor.addEventListener(
        'onDesignLoad',
        onDesignLoad,
      )
    }
  }

  return (
    <div className="container">
      <div className="row alisn-items-center">
        <div className="demo-inline-spacing mb-3 col-md-6">
          <Button outline color="primary" className="mr-2" onClick={saveDesign}>
            Save Design
          </Button>
          {/* <Button color="secondary" className="mr-2" onClick={exportHtml}>
            Export HTML
          </Button> */}
          <Button
            outline
            color="secondary"
            onClick={() => setShowVariable(!showVariable)}
          >
            {showVariable ? (
              <Eye className="mr-2" />
            ) : (
              <EyeOff className="mr-2" />
            )}
            Variables
          </Button>
          {showVariable && (
            <div className="d-flex my-3">
              {LIST_KEYS.map(el => (
                <Badge color="primary" className="mx-1" key={el}>
                  {`{{${el.toUpperCase()}}}`}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {/* {err.length > 0 && (
          <div className="col-md-6 my-4">
            <Alert color="danger">
              <div className="alert-body">
                <AlertCircle size={15} className="mr-3" />{' '}
                <span className="ms-1 fs-5">{`Các biến ${err.join(
                  ' ',
                )} Không hợp lệ`}</span>
              </div>
            </Alert>
          </div>
        )} */}
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} minHeight="90vh" />
      <ModalCreateTemplateEmail
        saveDesignHTML={saveDesignHTML}
        toggleModal={toggleModal}
        modal={modal}
      />
    </div>
  )
}

export default EmailEditorComponent
