// ** Third Party Components
import {Search} from 'react-feather'
import {Row, Col, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap'

const CategoriesSearchbar = () => {
  return (
    <div id="ecommerce-searchbar" className="ecommerce-searchbar">
      <Row className="mt-1">
        <Col sm="12">
          <form
            className="kb-search-input "
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <InputGroup className="input-group-merge">
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Search className="text-muted" size={14} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default CategoriesSearchbar
