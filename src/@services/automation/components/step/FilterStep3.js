import {CustomerLeadCard} from '@services/customer-leads'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Alert, Button, Col, Row, Spinner} from 'reactstrap'

// *** Query
import {CustomerLeadsQuery} from '@services/customer-leads'

const FilterStep3 = ({dataSubmit, stepper, showMore}) => {
  // *** Query
  // *** Data customers
  const {data: customers, isLoadingCustomer} =
    CustomerLeadsQuery.useListProfileLeads('', 1, 9, dataSubmit.filter)

  if (isLoadingCustomer)
    return (
      <Button color="primary">
        <Spinner color="white" size="sm" type="grow" />
        <span className="ms-50">Loading...</span>
      </Button>
    )

  return (
    <div>
      <Row>
        {customers && customers.data && customers.data.length > 0 ? (
          customers.data.map(item => (
            <Col md={4} key={item.id}>
              <CustomerLeadCard item={item} />
            </Col>
          ))
        ) : (
          <Alert color="danger">
            <div className="alert-body">
              <span className="font-weight-bold">
                Không tìm thấy liệu bạn cần...
              </span>
            </div>
          </Alert>
        )}
      </Row>
      {customers && customers.data && customers.data.length > 0 && (
        <div className="d-flex justify-content-start mb-3">
          <Button.Ripple size="sm" color="secondary" onClick={showMore}>
            Xem thêm
          </Button.Ripple>
        </div>
      )}
      <div className="d-flex justify-content-end">
        <div>
          <Button.Ripple
            color="secondary"
            className="btn-prev mr-3"
            size="sm"
            type="button"
            outline
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle mr-sm-2 mr-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Quay lại
            </span>
          </Button.Ripple>
        </div>
        <div>
          <Button.Ripple
            size="sm"
            type="button"
            color="primary"
            className="btn-next"
            onClick={() => stepper.next()}
          >
            <span className="align-middle d-inline-block">Tiếp theo</span>
            <ArrowRight
              size={14}
              className="align-middle ml-sm-2 ml-0"
            ></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default FilterStep3
