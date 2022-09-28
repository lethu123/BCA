import React, {useState} from 'react'
import {Alert, Col, Row} from 'reactstrap'
import ReactPaginate from 'react-paginate'
// ** component
import ProductCards from '../card/ProductCard'
import ModalBuyDataUser from '@services/project/components/modal/ModalBuyDataUser'
import ModalProjectData from '@services/project/components/modal/ModalProjectDetail'

const ProjectOpen = ({data, params, setParams, isFetching}) => {
  const [modal, setModal] = useState(false)
  const [isView, setIsView] = useState(false)
  const [project, setProject] = useState(null)

  const toggleModal = () => setModal(!modal)

  if (isFetching)
    return (
      <div>
        <Alert color="primary">
          <div className="alert-body">
            <span className="fw-bold">Đang lấy dữ liệu</span>
          </div>
        </Alert>
      </div>
    )

  if (!data)
    return (
      <div>
        <Alert color="primary">
          <div className="alert-body">
            <span className="fw-bold">Chưa có dữ liệu</span>
          </div>
        </Alert>
      </div>
    )

  const {data: listProject, metadata} = data
  return (
    <div>
      <Row>
        {listProject.length ? (
          listProject.map(it => (
            <Col lg="6" sm="6" key={it.id}>
              <ProductCards
                item={it}
                toggleModal={toggleModal}
                type={params?.type}
                setProject={setProject}
                setIsView={setIsView}
              />
            </Col>
          ))
        ) : (
          <Col lg="12">
            <Alert color="primary">
              <div className="alert-body">
                <span className="fw-bold">Chưa có dữ liệu</span>
              </div>
            </Alert>
          </Col>
        )}
      </Row>

      {metadata?.num_pages > 1 && (
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={params?.page - 1}
          onPageChange={page => setParams({...params, page: page.selected + 1})}
          pageCount={metadata?.num_pages || 1}
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
          pageLinkClassName={`page-link `}
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-2 mt-1 mx-3"
        />
      )}

      <ModalBuyDataUser
        modal={modal}
        toggleModal={toggleModal}
        project={project}
      />
      <ModalProjectData
        modal={isView}
        toggleModal={() => setIsView(!isView)}
        project={project}
      />
    </div>
  )
}

export default ProjectOpen
