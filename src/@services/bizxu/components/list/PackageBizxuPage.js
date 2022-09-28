import {Alert, Col, Row} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import {useState} from 'react'

// ** component
import ModalBuyPackageBizxu from '@services/bizxu/components/modal/ModalBuyPackageBizxu'
import BizxuItem from './BizxuItem'

// ** query
import {BizxuQuery} from '@services/bizxu'

const PackageBizxuPage = () => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const [modal, setModal] = useState(false)
  const [bizxuPackage, setBizxuPakage] = useState(null)

  // ** query
  const {data: bizxues} = BizxuQuery.useListBizxuPackageCenter({
    page: currentPage + 1,
  })

  const toggleModal = () => setModal(!modal)

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  if (!bizxues) {
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Chưa có dữ liệu!</span>
        </div>
      </Alert>
    )
  }

  const {data, metadata} = bizxues

  return (
    <div>
      {data.length > 0 ? (
        <>
          <Row className="mt-1">
            {data.map(it => (
              <Col lg="3" md="6" sm="12" key={it.id} className="mb-1">
                <BizxuItem
                  setBizxuPakage={setBizxuPakage}
                  item={it}
                  toggleModal={toggleModal}
                />
              </Col>
            ))}
          </Row>

          <ReactPaginate
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={metadata?.num_pages || 1}
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
              'pagination react-paginate pagination-sm justify-content-center pr-1 mt-1'
            }
            nextLabel={''}
            previousLabel={''}
          />
        </>
      ) : (
        <>
          <Alert color="primary">
            <div className="alert-body">
              <span className="fw-bold">Chưa có dữ liệu!</span>
            </div>
          </Alert>
        </>
      )}

      <ModalBuyPackageBizxu
        bizxuPackage={bizxuPackage}
        modal={modal}
        toggleModal={toggleModal}
      />
    </div>
  )
}

export default PackageBizxuPage
