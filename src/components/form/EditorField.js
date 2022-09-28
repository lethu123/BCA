import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {useCallback} from 'react'
import FieldLayout from './FieldLayout'

// *** Service upload imgage
import {uploadSingleImageService} from '@services/ultils'

class MyUploadAdapter {
  constructor(loader, module, setUrl) {
    this.loader = loader
    this.setUrl = setUrl
    this.module = module || ''
  }
  upload() {
    return new Promise((resolve, reject) => {
      this.loader.file.then(file => {
        uploadSingleImageService(file, this.module)
          .then(downloadURL => {
            if (downloadURL) {
              this.setUrl(downloadURL)
            }
            resolve({
              default: downloadURL,
            })
          })
          .catch(error => console.log(error))
      })
    })
  }
}

const EditorField = ({
  name = '',
  data = '',
  height = 300,
  module,
  getUrl = () => {},
  ...rest
}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onReady={editor => {
            editor?.editing?.view.change(writer => {
              writer.setStyle(
                'height',
                `${height}px`,
                editor.editing.view.document.getRoot(),
              )
            })
            if (
              editor &&
              editor.plugins &&
              editor.plugins.get('FileRepository')
            )
              editor.plugins.get('FileRepository').createUploadAdapter =
                loader => {
                  return new MyUploadAdapter(loader, module, url => getUrl(url))
                }
          }}
          {...rest}
          onChange={(event, editor) => {
            const datas = editor.getData()
            onChange(name, datas)
          }}
        />
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [data, getUrl, height, module, name, rest],
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

export default EditorField
