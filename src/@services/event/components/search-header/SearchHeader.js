import {Button, Col, Input, Row} from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import {useState} from 'react'
import {cleanObject} from 'utility/Utils'

// ** assets
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const SearchHeader = ({className, filter, setFilter, isWS}) => {
  const [state, setState] = useState({
    search: filter?.search || null,
    date_from: filter?.date_from || null,
    date_to: filter?.date_to || null,
  })

  return (
    <Row
      className={`mt-2 ${
        className || ''
      } align-items-center justify-content-between`}
    >
      <Col lg={isWS ? 8 : 6} md="12" className="mb-1">
        <Input
          placeholder="search"
          value={filter?.search}
          onChange={e =>
            setState(state => ({...state, search: e.target.value.trim()}))
          }
        />
      </Col>

      <Col lg={isWS ? 4 : 3} md="6" sm="12" className="mb-1">
        <Flatpickr
          value={[
            state?.date_from || filter?.date_from,
            state?.date_to || filter?.date_to,
          ]}
          placeholder="Ngày cần lọc"
          id="range-picker13"
          className="form-control"
          onChange={date => {
            setState(state => ({
              ...state,
              date_from: date[0],
              date_to: date[1],
            }))
          }}
          options={{
            mode: 'range',
          }}
        />
      </Col>

      <Col lg="3" md="3" sm="12" className={isWS ? 'mb-1' : 'mb-1 text-right'}>
        <div>
          <Button.Ripple
            onClick={() => setFilter(st => ({...st, ...state, page: 1}))}
            color="primary"
            className="mr-2"
            disabled={Object.values(cleanObject(state)).length < 1}
          >
            Lọc
          </Button.Ripple>
          <Button.Ripple
            onClick={() =>
              setFilter(st => ({
                ...st,
                search: null,
                date_from: null,
                date_to: null,
              }))
            }
            disabled={Object.values(cleanObject(state)).length < 1}
            color="secondary"
          >
            Làm mới
          </Button.Ripple>
        </div>
      </Col>
    </Row>
  )
}

export default SearchHeader
