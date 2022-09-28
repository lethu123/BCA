import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Badge, Button} from 'reactstrap'
import defaultImg from 'assets/images/portrait/small/default.jpg'

const ListInstructor = ({instructors}) => {
  const history = useHistory()
  return (
    <section className="team-one team-page py-0 w-100">
      <div className="row">
        {instructors.length > 0 &&
          instructors.map(ele => (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={ele.id}>
              <div className="team-one__single-main">
                <div className="team-one__image">
                  <img
                    src={ele.avatar || defaultImg}
                    alt=""
                    width="200"
                    height="200"
                  />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link to={`/hschool/instructor/${ele.id}/detail`}>
                      {ele.username}
                    </Link>
                  </h2>
                  <p className="team-one__designation">{ele.short_bio}</p>
                  <p className="team-one__text d-flex justify-content-center mb-1">
                    <span className="course-one__stars-wrap">
                      {[...Array(Math.round(parseFloat(ele.rating)))].map(
                        (_, idx) => (
                          <i className="fa fa-star" key={idx}></i>
                        ),
                      )}
                      {[...Array(Math.round(5 - parseFloat(ele.rating)))].map(
                        (_, idx) => (
                          <i className="far fa-star" key={idx}></i>
                        ),
                      )}
                    </span>
                  </p>
                  <p className="team-one__text mb-1">
                    {ele.skills.length > 0 ? (
                      ele.skills.map(data => (
                        <Badge
                          key={data.id}
                          pill
                          className="badge-glow mr-50"
                          style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                        >
                          {data.name}
                        </Badge>
                      ))
                    ) : (
                      <Badge
                        pill
                        className="badge-glow"
                        style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                      >
                        Development
                      </Badge>
                    )}
                  </p>
                  <Button.Ripple
                    className="round"
                    outline
                    color="primary"
                    onClick={() =>
                      history.push(`/user/${ele.url}/profile/about`)
                    }
                  >
                    See Profile
                  </Button.Ripple>
                </div>
                <div className="team-one__social">
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default ListInstructor
