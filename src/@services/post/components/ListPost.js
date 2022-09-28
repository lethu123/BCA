import React, {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Spinner} from 'reactstrap'
import PostItem from './PostItem'
import axios from 'axios'
import PostQuery from '../hook/query'

const ListPost = ({
  setIsOpen,
  setEditData,
  setPhotoIndex,
  setIsOpenLb,
  setImageList,
  user = [],
  userId,
}) => {
  const {data: initialPosts} = PostQuery.useGetListAllPost({page: 1, limit: 5})
  const {data: userPosts} = PostQuery.useGetListPostByUser(userId)

  const [allPosts, setAllPosts] = useState([])
  const [isLoadMore, setIsLoadMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (!userId) {
      if (initialPosts && initialPosts.data.length > 0) {
        setAllPosts([...initialPosts.data])
      }
    } else {
      if (userPosts && userPosts.data.length > 0) {
        setAllPosts([...userPosts.data])
      }
    }
  }, [initialPosts, userId, userPosts])

  const fetchData = async () => {
    try {
      let posts = await axios
        .get(
          `https://uat.api.bca.hspace.biz/${
            userId ? 'post' : 'all-post'
          }?page=${page + 1}&limit=5`,
          {params: {user_id: userId}},
        )
        .then(res => res.data)
      if (posts.data?.length > 0) {
        setAllPosts([...allPosts, ...posts.data])
        setPage(page => page + 1)
      }
      setIsLoadMore(posts.metadata?.has_next || false)
    } catch (error) {}
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={allPosts.length} //This is important field to render the next data
        next={() => fetchData()}
        hasMore={isLoadMore}
        loader={
          <div className="text-center">
            <Spinner type="grow" color="primary" size="sm" className="mr-1" />
            <Spinner type="grow" color="primary" size="sm" className="mr-1" />
            <Spinner type="grow" color="primary" size="sm" className="mr-1" />
            <Spinner type="grow" color="primary" size="sm" />
          </div>
        }
        // endMessage={
        //   <p style={{textAlign: 'center'}}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        {allPosts.length > 0 &&
          allPosts.map(item => (
            <PostItem
              key={item._id}
              item={item}
              setImageList={setImageList}
              setPhotoIndex={setPhotoIndex}
              setIsOpenLb={setIsOpenLb}
              user={user}
              setIsOpen={setIsOpen}
              setEditData={setEditData}
            />
          ))}
      </InfiniteScroll>
    </div>
  )
}

export default ListPost
