import React, {useEffect, useState} from 'react'
import {Input} from 'reactstrap'
import Picker from 'emoji-picker-react'
import {Meh} from 'react-feather'

const AddComment = ({reply}) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      alert('Comment')
    }
  }
  // *** State
  const [value, setValue] = useState('')
  const [chosenEmoji, setChosenEmoji] = useState(null)
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
    <div
      className="position-relative ml-auto mb-3"
      style={{width: reply && '90%'}}
    >
      <div className="position-relative">
        <Input
          type="textarea"
          name="text"
          rows="2"
          placeholder={reply ? 'Reply comment ...' : 'Comment ...'}
          onKeyPress={handleKeyPress}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div
          style={{position: 'absolute', right: '5px', top: '30%'}}
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
