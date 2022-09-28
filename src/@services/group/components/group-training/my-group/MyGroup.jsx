import {useState} from 'react'
import {Col, Row, Input, Alert} from 'reactstrap'

// *** Query
import {GroupQuery} from '@services/group/'

// ** component
import GroupItem from '../group-item/GroupItem'

import {useDebounce} from 'ahooks'
import ReactPaginate from 'react-paginate'

let userLogin =
  (localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))) ||
  null

const MyGroup = () => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 6,
    search: '',
  })

  const debouncedValue = useDebounce(query.search, {wait: 1200})

  // *** Query
  const {data: myGroups} = GroupQuery.useListGroupCreated(userLogin?.uid, {
    ...query,
    search: debouncedValue,
  })

  if (!myGroups || (myGroups && myGroups.data.length === 0))
    return (
      <Alert color="warning">
        <div className="alert-body">Bạn chưa tạo nhóm </div>
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
        {myGroups.data.map(item => (
          <Col lg="4" md="6" sm="12" className="mb-2" key={item._id}>
            <GroupItem item={item} type="owner" />
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
            myGroups?.metadata?.total_page || myGroups?.metadata?.num_pages || 1
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
            myGroups?.metadata?.total_page > 1000 ? 'mx-3 p-5' : ''
          }`}
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-1 mt-1 mx-3"
        />
      </div>
    </div>
  )
}

export default MyGroup
