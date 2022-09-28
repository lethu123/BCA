import {useState} from 'react'
import ReportModal from '../post-item/modal/ReportModal'
import PostItem from '../post-item/PostItem'

import {NewsfeedQuery} from '@services/news-feed-v1'
import axios from 'axios'
import {useQueryClient} from 'react-query'
import {Spinner} from 'reactstrap'
import InfiniteScroll from 'react-infinite-scroll-component'

const data = [
  {
    avatar: require('assets/images/portrait/small/avatar-s-18.jpg').default,
    username: 'Leeanna Alvord',
    postTime: '12 Dec 2018 at 1:16 AM',
    postText:
      'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
    postImg: [
      'https://colossal-storage.hspace.biz/storages/medias/Anh-avatar-dep-chat-lam-hinh-dai-dien_6dFYGfK.jpg',
      'https://colossal-storage.hspace.biz/storages/medias/anh-cute_ZtUzCrA.jpg',
      'https://colossal-storage.hspace.biz/storages/medias/dd25df36b75a4765cd4ddef557e9aafe_aHxYzqa.jpg',
      'https://colossal-storage.hspace.biz/storages/medias/hinh-anh-avatar-de-thuong_RMSLldr.jpg',
    ],
    likes: 1240,
    youLiked: true,
    comments: '1.25k',
    share: '1.05k',
    likedUsers: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-1.jpg').default,
        username: 'Trine Lynes',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-2.jpg').default,
        username: 'Lilian Nenes',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-3.jpg').default,
        username: 'Alberto Glotzbach',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-5.jpg').default,
        username: 'George Nordic',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-4.jpg').default,
        username: 'Vinnie Mostowy',
      },
    ],
    likedCount: 140,
    detailedComments: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-6.jpg').default,
        username: 'Kitty Allanson',
        comment:
          'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false,
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-8.jpg').default,
        username: 'Jackey Potter',
        comment:
          'Unlimited color🖌 options allows you to set your application color as per your branding 🤪.',
        commentsLikes: 61,
        youLiked: true,
      },
    ],
  },
  {
    avatar: require('assets/images/portrait/small/avatar-s-22.jpg').default,
    username: 'Rosa Walters',
    postTime: '11 Dec 2019 at 1:16 AM',
    postText:
      'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
    postImg: [
      'https://colossal-storage.hspace.biz/storages/medias/Anh-avatar-dep-chat-lam-hinh-dai-dien_6dFYGfK.jpg',
    ],
    likes: 1240,
    youLiked: true,
    comments: '1.25k',
    share: '1.25k',
    likedUsers: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-1.jpg').default,
        username: 'Kori Scargle',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-2.jpg').default,
        username: 'Florinda Mollison',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-3.jpg').default,
        username: 'Beltran Endley',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-5.jpg').default,
        username: 'Kara Gerred',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-4.jpg').default,
        username: 'Sophey Bru',
      },
    ],
    likedCount: 271,
    detailedComments: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-3.jpg').default,
        username: 'Kitty Allanson',
        comment:
          'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false,
      },
    ],
  },
  {
    avatar: require('assets/images/portrait/small/avatar-s-15.jpg').default,
    username: 'Charles Watson',
    postTime: '12 Dec 2019 at 1:16 AM',
    postText:
      'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
    postVid: 'https://www.youtube.com/embed/6stlCkUDG_s',
    likes: 1240,
    youLiked: true,
    comments: '1.25k',
    share: '1.25k',
    embedding_link: {
      id: 18,
      description:
        '✈️DEEP SEA |THÁI HOÀNG REMIX 2022#nhactiktok #vinahouse #music #nonstop #vietmix #nhachay #mixcloud #mixtape #djTôi không sở hữu bất kỳ nội dung nào của bài ...',
      icon: 'https://www.youtube.com/s/desktop/d4eb50c8/img/favicon_96x96.png',
      image: 'https://i.ytimg.com/vi/kSnzvM2oBhA/hqdefault.jpg',
      keywords: [
        'video',
        'chia sẻ',
        'điện thoại có máy ảnh',
        'điện thoại quay video',
        'miễn phí',
        'tải lên',
      ],
      title: '✈️DEEP SEA |THÁI HOÀNG REMIX 2022',
      language: 'vi',
      type: 'video.other',
      url: 'https://www.youtube.com/watch?v=kSnzvM2oBhA',
      provider: 'YouTube',
      target_type: 'post',
      target_id: null,
      created_at: '2022-06-03T08:38:50.636Z',
      updated_at: '2022-06-03T08:38:50.636Z',
    },
    likedUsers: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-1.jpg').default,
        username: 'Dehlia Bolderson',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-2.jpg').default,
        username: 'De Lamy',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-3.jpg').default,
        username: 'Vallie Kingsley',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-5.jpg').default,
        username: 'Nadia Armell',
      },
      {
        avatar: require('assets/images/portrait/small/avatar-s-4.jpg').default,
        username: 'Romonda Aseef',
      },
    ],
    likedCount: 264,
    detailedComments: [
      {
        avatar: require('assets/images/portrait/small/avatar-s-3.jpg').default,
        username: 'Kitty Allanson',
        comment:
          'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false,
      },
    ],
  },
]
const PostList = () => {
  const [open, setOpen] = useState(false)
  const [isLoadMore, setIsLoadMore] = useState(true)
  const queryClient = useQueryClient()
  const {data: allPosts, isLoading} = NewsfeedQuery.useGetListAllPost()

  const fetchData = async () => {
    if (
      allPosts &&
      allPosts.data &&
      allPosts.data.length &&
      allPosts.metadata
    ) {
      let moreData = await axios
        .get(`/all-post?page=${allPosts.metadata.current_page + 1}&limit=5`)
        .then(res => res.data)
      if (moreData && moreData.data) {
        queryClient.setQueryData(['GET_LIST_ALL_POST'], oldData => {
          if (oldData && oldData.data) {
            let newData = {
              ...oldData,
              data: [...oldData.data, ...moreData.data],
              metadata: moreData.metadata,
            }
            return newData
          } else {
            return oldData
          }
        })
      }
      setIsLoadMore(allPosts.metadata.has_next)
    }
  }

  return (
    <>
      <InfiniteScroll
        dataLength={allPosts ? allPosts.data.length : 0} //This is important field to render the next data
        next={() => fetchData()}
        hasMore={isLoadMore}
        loader={
          isLoading && (
            <div className="d-flex justify-content-center w-100 mb-2">
              <div className="mr-1">
                <Spinner type="grow" size="sm" color="primary" />
              </div>
              <div className="mr-1">
                <Spinner type="grow" size="sm" color="primary" />
              </div>
              <div className="mr-1">
                <Spinner type="grow" size="sm" color="primary" />
              </div>
              <div className="mr-1">
                <Spinner type="grow" size="sm" color="primary" />
              </div>
              <div className="mr-1">
                <Spinner type="grow" size="sm" color="primary" />
              </div>
            </div>
          )
        }
      ></InfiniteScroll>
      {allPosts?.data.map(item => (
        <PostItem
          key={item._id}
          handleModal={() => setOpen(true)}
          data={item}
        />
      ))}
      <ReportModal open={open} toggle={() => setOpen(false)} />
    </>
  )
}

export default PostList
