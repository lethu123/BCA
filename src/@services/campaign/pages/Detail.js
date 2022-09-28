import React, {useState} from 'react'
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import {useParams} from 'react-router'
import {CheckSquare, Eye, Flag, PlusCircle, Server, Users} from 'react-feather'

// *** Component
import ModalCampaignDetailHistory from '@services/campaign/components/modal/CampaignDetailHistory'
import FlowHistory from '@services/automation/auto-flow/FlowHistory'

// *** Query
import CampaignQuery from '@services/campaign/hook/query'

// route-dom
import {Link} from 'react-router-dom'

//scss
import './Detail.style.scss'

const data = [
  {
    id: 11,
    title: 'Đã gửi email nhưng sau 3 giờ chưa trả lời',
    uid: 1,
    active: true,
    icon: <Server size={21} />,
    color: 'primary',
  },
  {
    id: 12,
    title: 'Đã gửi email nhưng đã trả lời sau 4 giờ',
    uid: 1,
    active: false,
    icon: <Flag size={21} />,
    color: 'warning',
  },
  {
    id: 13,
    title: 'Đã gửi email',
    uid: 2,
    active: false,
    icon: <PlusCircle size={21} />,
    color: 'info',
  },
  {
    id: 14,
    title: 'Đã gửi email thành công sau 1 giờ',
    uid: 1,
    active: false,
    icon: <CheckSquare size={21} />,
    color: 'danger',
  },
]

const DetailCampaignHistory = () => {
  // *** Params ********************************
  const {campaignId} = useParams()
  const [dataTableHistories, setDataTableHistories] = useState(null)
  const [viewType, setViewType] = useState('flow')

  // *** Query ********************************
  const {useGetDetailCampaignHistory, useGetDetailCampaignHistoryV2} =
    CampaignQuery
  const {data: campaignDetail} = useGetDetailCampaignHistory(campaignId)
  const {data: histories, isLoading} = useGetDetailCampaignHistoryV2(
    campaignId,
    null,
  )

  return (
    <div className="p-5 campaign-detail" style={{backgroundColor: '#fff'}}>
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home"> Trang chủ </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/admin/campaign"> Lịch sử chiến dịch </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <span> {campaignDetail?.title || 'Chi tiết'}</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* View Type */}
      {/* <div className="w-100 text-center">
        <ButtonGroup className="mb-1">
          <Button
            outline={viewType !== 'list'}
            color="primary"
            onClick={() => setViewType('list')}
          >
            <List size="16" />
          </Button>
          <Button
            outline={viewType !== 'flow'}
            color="primary"
            onClick={() => setViewType('flow')}
          >
            <Codepen size="16" />
          </Button>
        </ButtonGroup>
      </div> */}

      {/* timeline */}
      {viewType === 'list' && (
        <div className="timeline">
          {campaignDetail?.block?.map((ele, idx) => (
            <div
              className={`timeline__event timeline__event--type${
                ele.title === 'Kết thúc' ? 6 : Math.abs(idx % 6)
              }`}
              key={ele.block_object_id}
            >
              <div
                className="timeline__event__icon text-primary"
                // style={{
                //   backgroundColor: `light-${ele.color}`,
                //   borderColor: 'black',
                // }}
              >
                {/* <div className="position-relative"> */}
                <img src={ele.icon} alt={ele.icon} width="45px" />
                {/* </div> */}

                <div>
                  <div className="timeline__event__date">{ele.title}</div>
                  <p
                    className="mb-0"
                    style={{fontSize: 13, color: '#fff', fontStyle: 'italic'}}
                  >
                    {ele.subtitle}
                  </p>

                  <p
                    style={{
                      backgroundColor: '#fff',
                      fontSize: 13,
                      width: 110,
                      borderRadius: 5,
                      textAlign: 'center',
                    }}
                    className="timeline__event__title mt-5"
                  >
                    {ele.block_type === 'ACTION' ? 'HÀNH ĐỘNG' : 'QUYẾT ĐỊNH'}
                  </p>
                </div>
              </div>
              <div className="timeline__event__content w-100">
                {/* <div className="timeline__event__title">Birthday</div> */}
                <div className="timeline__event__description">
                  <ListGroup>
                    {data.map(item => (
                      <ListGroupItem
                        className="d-flex justify-content-between align-items-center w-100"
                        key={item.id}
                      >
                        <div>
                          <span className="mr-3">{item.title}</span>
                          <Badge
                            pill
                            className="timeline__event__title py-1 px-3"
                          >
                            <Users className="align-middle mr-2 p-0" />
                            <span
                              className="align-middle"
                              style={{fontSize: 13}}
                            >
                              {item.uid}
                            </span>
                          </Badge>
                        </div>
                        <div>
                          <Button.Ripple
                            color="btn btn-light-primary"
                            onClick={() => {}}
                            size="sm"
                          >
                            <Eye size={16} />
                          </Button.Ripple>
                        </div>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {viewType === 'flow' && (
        <FlowHistory
          histories={histories}
          isLoading={isLoading}
          type={'campaign'}
          setHistories={histories => setDataTableHistories(histories)}
        />
      )}

      <ModalCampaignDetailHistory
        toggle={() => setDataTableHistories(null)}
        open={dataTableHistories !== null}
        datas={dataTableHistories}
      />
    </div>
  )
}

export default DetailCampaignHistory
