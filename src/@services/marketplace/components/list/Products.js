// *** React Imports
import {Fragment, useState} from 'react'

// *** Product components
import ProductCards from '../card/ProductCards'

// *** Third Party Components
import {Col, Row} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import AddPostNewfeed from '@services/post/components/AddPostNewfeed'

const ProductsPage = ({data}) => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <div>
      <div className="mt-1">
        <AddPostNewfeed value="Thêm sản phẩm muốn niêm yết" />
      </div>
      <div className="content-detached content-right">
        {data && data.length ? (
          <Fragment>
            <Row>
              {data.map(item => (
                <Col lg="6" sm="6" md="12" xl="6" key={item.id}>
                  <ProductCards item={item} />
                </Col>
              ))}
            </Row>
            <ReactPaginate
              forcePage={currentPage}
              onPageChange={page => handlePagination(page)}
              pageCount={data.length / 10 || 1}
              breakLabel={'...'}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              activeClassName={'active'}
              pageClassName={'page-item'}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={
                'pagination my-1 react-paginate pagination-sm justify-content-center pr-1'
              }
              nextLabel={''}
              previousLabel={''}
            />
          </Fragment>
        ) : (
          <div className="d-flex justify-content-center mt-2">
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
