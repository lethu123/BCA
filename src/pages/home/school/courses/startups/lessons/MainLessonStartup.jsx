import BreadCrumbs from '@core/components/breadcrumbs'
import React, {useState} from 'react'
import {Fragment} from 'react'
import {Button, Card, CardBody} from 'reactstrap'

import '../CourseStartup.style.scss'
import '@core/scss/base/pages/page-knowledge-base.scss'

import IdeationBusiness from './IdeationBusiness'
import UnderstandingCustommer from './UnderstandingCustomer'
import DiscoverCustomer from './DiscoverCustomer'
import {
  Check,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  Command,
  MapPin,
} from 'react-feather'

const MainLessonStartup = props => {
  const [activeCPN, setActiveCPN] = useState(0)
  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle="Khóa học Khởi nghiệp"
        breadCrumbParent="HShool"
        breadCrumbParent2="Khóa học Khởi nghiệp"
        breadCrumbParent3="Phần 1 Khám phá Cơ hội Khởi nghiệp"
        breadCrumbActive="Phần 1 Khám phá Cơ hội Khởi nghiệp"
      />
      <div id="knowledge-base-search">
        <Card
          className="knowledge-base-bg"
          style={{
            backgroundImage: `url(${
              require('assets/images/banner/banner.png').default
            })`,
          }}
        >
          <CardBody className=" ">
            <h4 className="">
              <span className="font-weight-bolder">Bài 3</span>
            </h4>
            <h1 className="text-primary" style={{fontSize: '40px'}}>
              Phát triển Ý tưởng kinh doanh
            </h1>
            <div className="d-flex align-item-center flex-wrap ">
              <p className="d-flex align-items-center">
                <Clock style={{marginRight: '5px'}} size="17" />
                <span>Thời lượng: 32 phút</span>
              </p>
              <p className="d-flex align-items-center ml-1">
                <CheckSquare style={{marginRight: '5px'}} size="17" />
                <span>Bài tập: 19 Bài tập</span>
              </p>
              <p className="d-flex align-items-center ml-1">
                <Command style={{marginRight: '5px'}} size="17" />
                <span>Độ khó: Trung Bình</span>
              </p>
            </div>
            <div className="d-flex align-items-center w-100 flex-md-wrap flex-lg-nowrap">
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Ý tưởng Kinh doanh là gì
                </span>
              </div>
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Thấu hiểu khách hàng
                </span>
              </div>
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Thiết kế giải pháp cho khách hàng
                </span>
              </div>
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Đề xuất giá trị cho khách hàng
                </span>
              </div>
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Hình thành các ý tưởng Sáng Kiến
                </span>
              </div>
              <div
                className="text-right"
                style={{position: 'relative', flexBasis: '17%'}}
              >
                <MapPin size="17" style={{marginBottom: '5px'}} />
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
                <span
                  style={{
                    position: 'absolute',
                    right: '-12%',
                    maxWidth: '100px',
                    marginTop: '10px',
                  }}
                >
                  Bài tập
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="content-startup">
        <div className="navigation-startup  d-flex align-items-center justify-content-between">
          <div className="previous-btn">
            <Button.Ripple
              className="btn-icon"
              color="primary"
              style={{padding: '4px'}}
              disabled={activeCPN === 0}
              onClick={() => setActiveCPN(activeCPN - 1)}
            >
              <ChevronLeft size="29" />
            </Button.Ripple>
            {activeCPN !== 0 && (
              <span className="pl-1 text-primary" style={{fontSize: '18px'}}>
                Quay lại
              </span>
            )}
          </div>
          <div className="title mb-0">
            <h3 className="mb-0 text-black">
              {activeCPN === 0
                ? 'Ý tưởng Kinh doanh là gì ?'
                : 'Bài 5:  Khám phá khách hàng'}
            </h3>
          </div>
          <div className="next-btn">
            {activeCPN === 5 && (
              <>
                <span className="pr-1 text-success" style={{fontSize: '18px'}}>
                  Hoàn thành
                </span>
                <Button.Ripple
                  className="btn-icon"
                  color="success badge-glow"
                  style={{padding: '4px'}}
                >
                  <Check size="29" />
                </Button.Ripple>
              </>
            )}
            {activeCPN < 5 && (
              <>
                <span className="pr-1 text-primary" style={{fontSize: '18px'}}>
                  Tiếp theo
                </span>
                <Button.Ripple
                  className="btn-icon"
                  color="primary"
                  style={{padding: '4px'}}
                  onClick={() => setActiveCPN(activeCPN + 1)}
                >
                  <ChevronRight size="29" />
                </Button.Ripple>
              </>
            )}
          </div>
        </div>

        {activeCPN === 0 && (
          <div className="pb-2">
            <IdeationBusiness />
          </div>
        )}
        {activeCPN === 1 && (
          <div className="pb-2">
            <UnderstandingCustommer />
          </div>
        )}
        {activeCPN === 2 && (
          <div className="pb-2">
            <DiscoverCustomer />
          </div>
        )}

        {activeCPN === 3 && (
          <div className="pb-2">
            <DiscoverCustomer />
          </div>
        )}
        {activeCPN === 4 && (
          <div className="pb-2">
            <DiscoverCustomer />
          </div>
        )}
        {activeCPN === 5 && (
          <div className="pb-2">
            <DiscoverCustomer />
          </div>
        )}

        <div className="navigation-startup pb-3 d-flex align-items-center justify-content-between">
          <div className="previous-btn">
            <Button.Ripple
              className="btn-icon"
              color="primary"
              style={{padding: '4px'}}
              disabled={activeCPN === 0}
              onClick={() => setActiveCPN(activeCPN - 1)}
            >
              <ChevronLeft size="29" />
            </Button.Ripple>
          </div>
          <div className="title mb-0">
            <span> Bài giảng tiếp theo: </span>
            <h4 className="mb-0 text-black">
              Thiết kế giải pháp cho khách hàng
            </h4>
          </div>
          <div className="next-btn">
            <Button.Ripple
              className="btn-icon"
              color="primary"
              style={{padding: '4px'}}
              disabled={activeCPN === 5}
              onClick={() => setActiveCPN(activeCPN + 1)}
            >
              <ChevronRight size="29" />
            </Button.Ripple>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MainLessonStartup
