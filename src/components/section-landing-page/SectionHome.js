import React from 'react'
import {useHistory} from 'react-router-dom'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import ReactPlayer from 'react-player'

const SectionHome = ({
  title,
  sub_title,
  description,
  imgs,
  url,
  link_youtube,
}) => {
  const history = useHistory()
  return (
    <div className="mt-20">
      <h2
        className="text-center font-weight-bold text-warning mb-10"
        onClick={() => history.push(url)}
        style={{cursor: url ? 'pointer' : 'vertical-text'}}
      >
        {title}
      </h2>

      <h5 className="mb-5  text-primary">{sub_title}</h5>
      {imgs && imgs.length <= 1 && imgs.length > 0 ? (
        <div className="text-center ">
          <img src={imgs} alt="" className="img-fluid " />
        </div>
      ) : (
        imgs && (
          <Row>
            {imgs.map((ele, index) => (
              <Col lg={6} key={index} className="mt-5 pt-3 text-center">
                <img src={ele} alt="ele" className="img-fluid " />
              </Col>
            ))}
          </Row>
        )
      )}
      <p style={{fontSize: '15px'}} className="my-10">
        {description}
      </p>
      {link_youtube && (
        <ReactPlayer
          url={link_youtube}
          className="react-player-video my-2 rounded overflow-hidden mx-auto"
          width="600px"
          height="330px"
          controls={true}
        />
      )}
    </div>
  )
}

export default SectionHome
