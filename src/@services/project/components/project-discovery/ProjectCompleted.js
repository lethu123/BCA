import React, {useState} from 'react'
import {Col, Row} from 'reactstrap'
// ** component
import ProductCards from '../card/ProductCard'
import ModalBuyDataUser from '@services/project/components/modal/ModalBuyDataUser'

const ProjectCompleted = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)
  return (
    <div className="mt-1">
      <Row>
        <Col lg="6">
          <ProductCards toggleModal={toggleModal} type="open" />
        </Col>
        <Col lg="6">
          <ProductCards type="open" toggleModal={toggleModal} />
        </Col>
      </Row>
      <ModalBuyDataUser modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default ProjectCompleted
