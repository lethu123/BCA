import {Search} from 'react-feather'
import {
  Card,
  CardBody,
  CardText,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap'

const ToolHeader = ({searchTerm, setSearchTerm, handleFilter, title}) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
    <div id="knowledge-base-search">
      <Card
        className="knowledge-base-bg"
        style={{
          backgroundImage: `url(${
            require('assets/images/banner/banner.png').default
          })`,
        }}
      >
        <CardBody className="text-center">
          <h2 className="text-primary">{title}</h2>
          <CardText className="mb-2">
            The Keywords You Are Looking For?
          </CardText>
          <Form className="kb-search-input" onSubmit={e => e.preventDefault()}>
            <InputGroup className="input-group-merge">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                value={searchTerm}
                onChange={e => onChange(e)}
                placeholder="Ask a question..."
              />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default ToolHeader
