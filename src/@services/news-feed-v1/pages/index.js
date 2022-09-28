// ** Reactstrap Imports
import {Row, Col} from 'reactstrap'

//**Component */
import InviteJoinBCA from 'components/invite-join-BCA/InviteJoinBCA'
import DataPackage from 'components/data-package/DataPackage'
import NewsFeedSuggested from '../components/suggestion-people/NewsFeedSuggested'
import CreatePost from '../components/create-post/CreatePost'

//**Context */
import {ModalProvider} from '../context/create-post'
import {PostProvider} from '../context/post'

//**Fake data */
import dataSuggest from '../components/suggestion-people/data'
import PostList from '../components/post-list/PostList'

const NewsFeed = () => {
  return (
    <>
      <section id="profile-info">
        <Row>
          <Col lg={{size: 8, order: 1}} sm={{size: 12}} xs={{order: 2}}>
            <ModalProvider>
              <CreatePost />
              <PostProvider>
                <PostList />
              </PostProvider>
            </ModalProvider>
          </Col>
          <Col lg={{size: 4, order: 2}} sm={{size: 12}} xs={{order: 1}}>
            <InviteJoinBCA />
            <NewsFeedSuggested data={dataSuggest} />
            <DataPackage />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default NewsFeed
