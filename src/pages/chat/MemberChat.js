import React from 'react'
import {Card} from 'reactstrap'

// ** image
import image from 'assets/media/avatars/150-6.jpg'
import image1 from 'assets/media/avatars/150-5.jpg'
import image2 from 'assets/media/avatars/150-15.jpg'
import image3 from 'assets/media/avatars/150-14.jpg'
import image4 from 'assets/media/avatars/150-13.jpg'
import image5 from 'assets/media/avatars/150-12.jpg'
import image6 from 'assets/media/avatars/150-11.jpg'
import image7 from 'assets/media/avatars/150-10.jpg'
import image8 from 'assets/media/avatars/150-9.jpg'

// **scss
import './custom.scss'
import {Link} from 'react-router-dom'

const MemberChat = () => {
  return (
    <Card className="memberChat">
      <div className="card-body">
        {/*begin:Search*/}
        <div className="input-group input-group-solid">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="svg-icon svg-icon-lg">
                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      opacity="0.3"
                    />
                    <path
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </span>
          </div>
          <input
            type="text"
            className="form-control py-4 h-auto"
            placeholder="Email"
          />
        </div>
        {/*end:Search*/}
        {/*begin:Users*/}
        <div className="mt-3" style={{height: 690, overflow: 'scroll'}}>
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Matt Pears
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Head of Development
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                35 mins
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image1} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Charlie Stone
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Art Director
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                7 hrs
              </span>
              <span className="label label-sm label-success">4</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image2} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Teresa Fox
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Web Designer
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                3 hrs
              </span>
              <span className="label label-sm label-danger">5</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image3} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Giannis Nelson
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  IT Consultant
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                2 days
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image4} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Carles Puyol
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Operator
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                5 mins
              </span>
              <span className="label label-sm label-success">9</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image5} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Ana Torn
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Head Of Finance
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                2 days
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image2} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Lisa Pears
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Web Designer
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                6 mins
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image6} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Amanda Bold
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Art Director
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                3 hrs
              </span>
              <span className="label label-sm label-warning">7</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image7} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Nick Jhonson
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  IT Consultant
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                10 mins
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image8} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Sarah Larson
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Web Designer
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                4 hrs
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image1} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Matt Pears
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Head of Development
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                35 mins
              </span>
              <span className="label label-sm label-success">5</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image4} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Tim Stone
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Web Developer
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                5 hrs
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image6} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Jhon Richardson
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Head of Development
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                1 week
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image7} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Ana Kiskia
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Web Master
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                35 mins
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image8} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Nick Stone
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Art Director
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                3 hrs
              </span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src={image3} />
              </div>
              <div className="d-flex flex-column">
                <Link
                  to="#"
                  className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                >
                  Nick Nilson
                </Link>
                <span className="text-muted font-weight-bold font-size-sm">
                  Software Arcitect
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">
                3 days
              </span>
            </div>
          </div>
          {/*end:User*/}
          <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{left: 0, width: 0}}
            />
          </div>
          <div
            className="ps__rail-y"
            style={{top: 0, height: 220, right: '-2px'}}
          >
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{top: 0, height: 45}}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MemberChat
