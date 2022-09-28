import {Label} from 'reactstrap'
// ** Third Party Components
import {convertToRaw} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import '@core/scss/react/libs/editor/editor.scss'

function myBlockRenderer(contentBlock) {
  const type = contentBlock.getType()

  if (type === 'atomic') {
    return {
      component: () => <></>,
      editable: false,
    }
  }
}

const EditorField = ({
  label,
  required,
  onChange = () => {},
  value,
  options = [
    'inline',
    'blockType',
    'fontSize',
    'fontFamily',
    'list',
    'textAlign',
    'colorPicker',
    'link',
    'embedded',
    'emoji',
    'image',
    'remove',
    'history',
  ],
  maximum = 10000,
  feedback,
}) => {
  // ** State

  const htmlValue =
    draftToHtml(convertToRaw(value.getCurrentContent())).replace(
      /(<([^>]+)>)/gi,
      '',
    ).length - 1

  return (
    <>
      {label && (
        <Label className="form-label">
          {label}{' '}
          {required && (
            <sup
              style={{
                color: '#FF0000',
                fontSize: '1rem',
                top: '0',
              }}
            >
              *
            </sup>
          )}
        </Label>
      )}
      <Editor
        editorState={value}
        onEditorStateChange={onChange}
        toolbar={{
          options,
          inline: {inDropdown: true},
          list: {inDropdown: true},
          textAlign: {inDropdown: true},
          link: {inDropdown: true},
        }}
        blockRendererFn={myBlockRenderer}
      />
      {required && (
        <div className="text-danger w-100 text-end mt-50">
          {htmlValue > 0 && (
            <span className="text-muted fst-italic me-1">
              Typing:{htmlValue}
            </span>
          )}{' '}
          (Maximum {maximum} characters)
        </div>
      )}
    </>
  )
}

export default EditorField
