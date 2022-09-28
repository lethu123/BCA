//**UI*/
import {Card, Col, Row} from 'reactstrap'
import {useEffect, useRef, useState} from 'react'

//**Component */
// import ImagesInp from '@core/components/icon/images-input/ImagesInp'

//**Third party */
import TextareaAutosize from 'react-textarea-autosize'
import {Meh, Save, X, XCircle} from 'react-feather'

//**Hook & ctx */
// import {PostsMutation} from 'hook/posts'
// import {useAuthCtx} from 'context/auth'
// import {usePostsCtx} from 'context/posts'

// *** Utils
// import {uploadMedia, detectURL} from 'hook/utils'
// import axios from 'axios'

//**Fix SSR https://github.com/ealush/emoji-picker-react/issues/184 */
// let Picker
// if (typeof window !== 'undefined') {
//   import('emoji-picker-react-2').then(_module => {
//     Picker = _module.default
//   })
// }

const AddComment = ({
  AddCommentSubmit,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  //**State */
  const [value, setValue] = useState('')
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [img, setImg] = useState(null)

  //**Ctx */
  // const {
  //   state: {userUid},
  // } = useAuthCtx()

  //**Mutation */
  // const {mutate: createComment} = PostsMutation.useAddComment(idPost)

  //**Emoji-picker */
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
    setShowEmoji(false)
  }
  const [showEmoji, setShowEmoji] = useState(false)

  useEffect(() => {
    if (chosenEmoji) {
      setValue(value + chosenEmoji.emoji)
    }
  }, [chosenEmoji])

  const inputRef = useRef(null)
  const [text, setText] = useState(initialText)
  function handleOnEnter(text) {
    text.length === 0 ? setText('') : AddCommentSubmit(text)
  }
  const isDisabled = text.length === 0

  const onSubmit = e => {
    e.preventDefault()
    AddCommentSubmit(text)
    setText('')
  }
  return (
    <Row>
      <Col md={1}>
        <div className="mr-1" style={{width: '50px', height: '50px'}}>
          <img
            className="w-100 h-100 rounded-circle"
            style={{objectFit: 'cover'}}
            src="https://res.cloudinary.com/cloudhspace/image/upload/v1651561703/dev.hspace.biz/user-profile/avt_profile_mdmacl.png"
            alt=""
          />
        </div>
      </Col>
      <Col md={11} className="d-flex align-items-center">
        <TextareaAutosize
          className="w-100 border-0 rounded mycustom_textarea"
          placeholder="Press Enter to comment..."
          minRows={2}
          style={{
            padding: '12px 40px 12px 12px',
          }}
          // onKeyDown={e =>
          //   handleKeyDown(
          //     e,
          //     `${idPost}_${commentParent.id ? commentParent.id : '0'}`,
          //   )
          // }
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          name="comment-content"
          // id={`${idPost}_${commentParent.id ? commentParent.id : '0'}`}
          ref={inputRef}
        />
        <div
          className="cursor-pointer h-100 d-flex align-items-center pe-1"
          style={{
            backgroundColor: '#F4F5F4',
            borderRadius: '0 8px 8px 0',
          }}
        >
          {/* <ImagesInp width="35px" height="35px" fill="#CCCCCC" /> */}
        </div>
      </Col>
    </Row>
  )
}

export default AddComment
