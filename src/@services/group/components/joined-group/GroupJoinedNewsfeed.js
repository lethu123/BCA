import {useState} from 'react'
import {Alert, Col, Input, Row} from 'reactstrap'

// *** Query
import {GroupQuery} from '@services/group/'

// ** component
import GroupItem from '../group-training/group-item/GroupItem'

import {useDebounce} from 'ahooks'
import ReactPaginate from 'react-paginate'

let userLogin =
  (localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))) ||
  null

const GroupJoinedNewsfeed = () => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 12,
    search: '',
  })

  const debouncedValue = useDebounce(query.search, {wait: 1200})

  // *** Query
  const {data: groupExploreds} = GroupQuery.useListGroupExplored(
    userLogin?.uid,
    {
      ...query,
      search: debouncedValue,
    },
  )

  if (!groupExploreds || (groupExploreds && groupExploreds.data.length === 0))
    return (
      <Alert color="warning">
        <div className="alert-body">Hiện chưa có nhóm</div>
      </Alert>
    )

  return (
    <div>
      <Input
        placeholder="Tìm kiếm theo tên..."
        value={query.search}
        onChange={e => setQuery({...query, search: e.target.value})}
        className="w-50 my-1"
      />
      <Row className="mt-3">
        {groupExploreds &&
          groupExploreds.data &&
          groupExploreds.data.map(item => (
            <Col md="6" sm="12" className="mb-2" key={item._id}>
              <GroupItem item={item} type="explore" />
            </Col>
          ))}
      </Row>
      <div>
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={query.page - 1}
          onPageChange={page => setQuery({...query, page: page.selected + 1})}
          pageCount={
            groupExploreds?.metadata?.total_page ||
            groupExploreds?.metadata?.num_pages ||
            1
          }
          breakLabel="..."
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName="active"
          pageClassName="page-item"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          nextClassName="page-item next"
          previousClassName="page-item prev"
          previousLinkClassName="page-link"
          pageLinkClassName={`page-link ${
            groupExploreds?.metadata?.total_page > 1000 ? 'mx-3 p-5' : ''
          }`}
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-1 mt-1 mx-3"
        />
      </div>
    </div>
  )
}

export default GroupJoinedNewsfeed
