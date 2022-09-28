import {CreatePost, PostList, Recomendation} from 'components/feed'
import {ModalProvider} from 'context/create-post'
import {PostProvider} from 'context/posts'
import {Col, Row} from 'reactstrap'

const NewsFeed = () => {
  return (
    <>
      <Row>
        <Col md={5}>
          <Recomendation />
        </Col>
        <Col md={7}>
          {/* <SidebarHorizontal /> */}
          <ModalProvider>
            <CreatePost />
            <PostProvider>
              <PostList />
            </PostProvider>
          </ModalProvider>
        </Col>
      </Row>
    </>
  )
}

export default NewsFeed
