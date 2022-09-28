import MyButton from '@core/components/button/MyButton'
import {MoreVertical} from 'react-feather'
import {Col, Row} from 'reactstrap'
import data from './data'
const SingleImages = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          {data.map(item => (
            <Col className="mb-1" key={item._key} md={3}>
              <div className="position-relative">
                <div className="cursor-pointer">
                  <img
                    style={{
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                    className="w-100"
                    src={item.img_src}
                    alt={item._key}
                  />
                </div>
                <MoreVertical
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </Col>
          ))}
          <div className="text-center mt-1">
            <MyButton
              className="title-16-700-24"
              color="gray-1"
              textcl="#1C3218"
              text="Load more Photos"
            />
          </div>
        </Row>
      </div>
    </>
  )
}

export default SingleImages
