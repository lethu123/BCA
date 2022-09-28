import React, {useEffect, useState} from 'react'
import Picker from 'emoji-picker-react'
import {Meh} from 'react-feather'
import TextareaAutosize from 'react-textarea-autosize'

// ** query
import {PostMutation} from '@services/post'

const AddComment = ({idPost, reply, item, setCurrentCmt, currentCmt}) => {
  // *** State
  const [value, setValue] = useState(item?.content || '')
  const [chosenEmoji, setChosenEmoji] = useState(null)

  const {mutate} = PostMutation.useHandleComment(item?._id || null)
  const {mutate: mutateReplies} = PostMutation.useHandleReplyComment(
    item?._id || null,
  )
  const userData =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))

  const handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (value.trim()) {
        const formData = new FormData()
        formData.append('content', value)
        if (reply) {
          if (!item) {
            // create
            formData.append('author_id', userData?.uid)
            formData.append('comment_id', idPost)
          } else {
            // update
            formData.append('id', item._id)
          }
          mutateReplies(formData)
          setValue('')
          if (currentCmt) {
            setCurrentCmt({...currentCmt, isOpen: true})
          }
        } else {
          if (!item) {
            // create
            formData.append('author_id', userData?.uid)
            formData.append('target_id', idPost)
          } else {
            // update
            formData.append('id', item._id)
            formData.append('like', 1)
          }

          mutate(formData)
          setValue('')
        }
      }
    }
  }

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

  return (
    <div className="position-relative ml-auto  w-100">
      <div className="position-relative mt-2">
        <TextareaAutosize
          minRows={2}
          className="form-control"
          onKeyPress={handleKeyPress}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          name="text"
          placeholder={reply ? 'Reply ...' : 'Comment ...'}
        />
        <div
          style={{position: 'absolute', right: '10px', bottom: '10%'}}
          className="cursor-pointer"
          onClick={() => setShowEmoji(!showEmoji)}
        >
          <Meh size={18} />
        </div>
      </div>
      {showEmoji && (
        <div>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  )
}

export default AddComment
