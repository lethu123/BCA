import React from 'react'
import {useHistory} from 'react-router-dom'
import {Badge, Button} from 'reactstrap'
import {Edit, MoreVertical} from 'react-feather'

//image
import project from 'assets/images/datacenter/project.png'
import backWhite from 'assets/images/datacenter/back-white.png'

//component
import {StatisticProjectDetail, TableProjectDetail} from '@services/project'

const ProjectDetailPage = () => {
  const history = useHistory()
  return (
    <div>
      <div className="d-block d-md-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <img
            src={backWhite}
            alt="dataCenter"
            className="img-fluid mr-5"
            width="50px"
            onClick={() => history.push('/admin/du-an/quan-ly-cac-du-an')}
          />
          <img
            src={project}
            alt="dataCenter"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          />
          <div>
            <h4 className="font-weight-bold">Dự án thi phương Insurance</h4>
            <Badge color="success" className="badge-glow">
              Dự án đối tác
            </Badge>
          </div>
        </div>
        <div className="mt-5 mt-md-0 w-100 w-md-50 text-right">
          <Button.Ripple
            color="primary"
            className="mr-2 p-2"
            onClick={() =>
              history.push('/admin/du-an/quan-ly-cac-du-an/1/chi-tiet')
            }
          >
            <Edit size={20} className="mr-2" />
            Xem chi tiết
          </Button.Ripple>
          <Button.Ripple color="secondary" className="mr-2 p-2">
            <MoreVertical />
          </Button.Ripple>
        </div>
      </div>
      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="px-5 py-2"
      >
        <StatisticProjectDetail />
        <TableProjectDetail />
      </div>
    </div>
  )
}

export default ProjectDetailPage
