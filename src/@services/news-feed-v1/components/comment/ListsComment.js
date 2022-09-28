import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from './data'
import {useEffect, useState} from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
const ListsComment = ({currentUserId}) => {
  const [backendComments, setbackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    backendComments => backendComments.parrentId === null,
  )
  const getReplies = commentId => {
    return backendComments
      .filter(backendComments => backendComments.parrentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createAt).getTime() - new Date(b.createAt).getTime(),
      )
  }
  const addCommentForm = (text, parrentId) => {
    createCommentApi(text, parrentId).then(comment => {
      setbackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }
  const deleteComment = commentId => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          backendComment => backendComment.id !== commentId,
        )
        setbackendComments(updatedBackendComments)
      })
    }
  }
  const editComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map(backendComment => {
        if (backendComment.id === commentId) {
          return {...backendComment, body: text}
        }
        return backendComment
      })
      setbackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }
  useEffect(() => {
    getCommentsApi().then(data => {
      setbackendComments(data)
    })
  }, [])
  return (
    <>
      {rootComments.map(item => (
        <Comment
          CommentCurrentUserID={currentUserId}
          key={item.id}
          data={item}
          replies={getReplies(item.id)}
          deleteComment={deleteComment}
          editComment={editComment}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          addComment={addCommentForm}
        />
      ))}
      <AddComment AddCommentSubmit={addCommentForm} />
    </>
  )
}

export default ListsComment
