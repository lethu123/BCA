import React, {useEffect, useRef, useState} from 'react'

import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
  Modifier,
  convertFromRaw,
} from 'draft-js'
import dynamic from 'next/dynamic'
import draftToHtml from 'draftjs-to-html'
// import toast from 'react-hot-toast'
import TagAvatar from './TagAvatar'
// import {parse} from 'node-html-parser'

let Picker
if (typeof window !== 'undefined') {
  import('emoji-picker-react-2').then(_module => {
    Picker = _module.default
  })
}

let htmlToDraft
if (typeof window !== 'undefined') {
  import('html-to-draftjs').then(_module => {
    htmlToDraft = _module.default
  })
}

// let Editor
// if (typeof window !== 'undefined') {
//   import('react-draft-wysiwyg').then(_module => {
//     Editor = _module.Editor
//   })
// }

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  {ssr: false},
)

const EmojiComponent = ({editorState, onChange}) => {
  const [showEmoji, setShowEmoji] = useState(false)
  useEffect(() => {
    window.__DRAFT_GKX = {
      draft_killswitch_allow_nontextnodes: true,
    }
  }, [])

  const onEmojiClick = (event, emojiObject) => {
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      emojiObject.emoji,
      editorState.getCurrentInlineStyle(),
    )
    onChange(EditorState.push(editorState, contentState, 'insert-characters'))
    setShowEmoji(false)
  }

  return (
    <div className="rdw-option-wrapper position-relative">
      <div
        id="icon-emoji-editor"
        onClick={() => setShowEmoji(!showEmoji)}
        style={{fontSize: '1.8rem'}}
        data-emoji={showEmoji ? 'open' : 'close'}
      >
        😎
      </div>
      {showEmoji && (
        <div
          className="position-absolute"
          style={{top: '-60px', right: '30px', zIndex: 1000}}
          id="emoji-provider"
        >
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  )
}

const INITIAL_CONTENT = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: 'Initialized from content state.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
}

const EditorField = ({
  onChange = () => {},
  value,
  noBorder = false,
  ...rest
}) => {
  const editorRef = useRef(null)
  const [editorState, setEditorState] = useState(() =>
    value
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(htmlToDraft(value).contentBlocks),
        )
      : EditorState.createEmpty(),
  )

  const [contentState, setContentState] = useState(() =>
    convertFromRaw(INITIAL_CONTENT),
  )

  const handleEditorChange = data => {
    let parseData = draftToHtml(convertToRaw(data.getCurrentContent()))

    // const add_tag_p = function (html_data, tag) {
    //   let root = parse(html_data)
    //   let list_element = root.querySelectorAll(tag)

    //   console.log(list_element)

    //   if (list_element && list_element.length) {
    //     list_element.forEach(element => {
    //       console.log(element.toString())

    //       html_data = html_data.replace(
    //         element.toString(),
    //         '<p>' + element.toString() + '</p>',
    //       )
    //     })
    //   }
    //   return html_data
    // }

    // add_tag_p(parseData, 'img')
    // add_tag_p(parseData, 'figure')

    if (parseData.includes('<img')) {
      // toast.error(`Clipboard must not contain images, try again !`)
    } else {
      setEditorState(data)
    }

    onChange(parseData)
  }

  // useEffect(() => {
  //   if (editorRef && editorRef.current) {
  //     editorRef.current.focusEditor()
  //   }
  // }, [])

  return (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName={`editor-class ${noBorder ? 'border-0' : ''}`}
      toolbarClassName={`toolbar-class ${noBorder ? 'border-0' : ''}`}
      editorState={editorState}
      onEditorStateChange={data => handleEditorChange(data)}
      // onContentStateChange={data => setContentState(data)}
      mention={{
        separator: ' ',
        trigger: '@',
        suggestions: [
          {
            text: <TagAvatar />,
            value: 'apple',
            url: 'apple',
          },
          {
            text: <TagAvatar />,
            value: 'banana',
            url: 'banana',
          },
          {
            text: <TagAvatar />,
            value: 'cherry',
            url: 'cherry',
          },
          {
            text: <TagAvatar />,
            value: 'durian',
            url: 'durian',
          },
          {
            text: <TagAvatar />,
            value: 'eggfruit',
            url: 'eggfruit',
          },
          {
            text: <TagAvatar />,
            value: 'fig',
            url: 'fig',
          },
          {
            text: <TagAvatar />,
            value: 'grapefruit',
            url: 'grapefruit',
          },
          {
            text: <TagAvatar />,
            value: 'honeydew',
            url: 'honeydew',
          },
        ],
      }}
      toolbarCustomButtons={[<EmojiComponent />]}
      toolbar={{
        options: [
          'inline',
          'blockType',
          'fontSize',
          'fontFamily',
          'list',
          'textAlign',
        ],
      }}
      // ref={editorRef}
      {...rest}
    />
  )
}

export default EditorField
