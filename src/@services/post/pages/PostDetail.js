import React from 'react'
import {useParams} from 'react-router-dom'
import PostDetailComponent from '../components/PostDetailComponent'

const PostDetail = () => {
  const {id} = useParams()

  return (
    <div>
      <PostDetailComponent id={id} />
    </div>
  )
}

export default PostDetail
