import React, {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Spinner} from 'reactstrap'
import PostItem from '@services/post/components/PostItem'
import axios from 'axios'
import {PostQuery} from '@services/post'
import {getUserData} from 'utility/Utils'

const ListPost = ({
  setIsOpen,
  setEditData,
  setPhotoIndex,
  setIsOpenLb,
  setImageList,
  user = [],
  groupId,
}) => {
  const {data: groupPosts} = PostQuery.useGetListGroupPost(groupId)

  const [allPosts, setAllPosts] = useState([])
  const [isLoadMore, setIsLoadMore] = useState(true)
  const [page, setPage] = useState(1)

  const userData = getUserData()

  useEffect(() => {
    if (groupId) {
      if (groupPosts && groupPosts.data.length > 0) {
        return setAllPosts([...groupPosts.data])
      }
    }
  }, [groupId, groupPosts])

  const fetchData = async () => {
    try {
      let posts = await axios
        .get(`https://uat.api.bca.hspace.biz/post?page=${page + 1}&limit=5`, {
          params: {user_id: userData.uid, group_id: groupId},
        })
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
