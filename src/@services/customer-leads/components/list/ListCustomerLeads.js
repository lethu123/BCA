import ReactPaginate from 'react-paginate'
import {Alert} from 'reactstrap'

// *** Components
import {CustomerLeadCard} from '@services/customer-leads'

const ListCustomerLeads = ({
  datas = [],
  currentPage,
  setCurrentPage,
  metadata = {},
  checkTag,
  setDataCheked,
}) => {
  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <div>
      <>
        {datas.length === 0 ? (
          <Alert color="danger">
            <div className="alert-body">
              <span className="font-weight-bold">
                Không tìm thấy liệu bạn cần...
              </span>
            </div>
          </Alert>
        ) : (
          <div className="row">
            {datas.map(item => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-2"
                key={item.prf_id}
              >
                <CustomerLeadCard
                  item={item}
                  datas={datas}
                  checkTag={checkTag}
                  setDataCheked={setDataCheked}
                />
              </div>
            ))}
          </div>
        )}

        {metadata.num_pages > 1 && (
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={metadata.num_pages || 1}
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
              metadata?.num_pages > 1000 ? 'mx-3 p-5' : ''
            }`}
            containerClassName="pagination react-paginate separated-pagination pagination-md justify-content-center p-1 mt-1 mx-3"
          />
        )}
      </>
    </div>
  )
}

export default ListCustomerLeads
