import React, {useEffect, useState} from 'react'
import {
  Button,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import {useHistory, useParams} from 'react-router'

//image
import project from 'assets/images/home/AvaPromotion.png'
import projectBtn from 'assets/images/datacenter/project-btn.png'

//component
import {
  ProjectManagePage,
  ProjectDeletePage,
  ActivityHistoryPage,
  ModalCreateProject,
  StatisticProject,
  ChartProject,
} from '@services/project'

const ProjectPage = () => {
  const history = useHistory()
  const {type} = useParams()
  console.log(useParams())

  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý các dự án',
      path: 'quan-ly-cac-du-an',
      component: <ProjectManagePage />,
    },
    {
      id: '2',
      name: 'Dự án đã xóa',
      path: 'du-an-da-xoa',
      component: <ProjectDeletePage />,
    },
    {
      id: '3',
      name: 'Lịch sử hoạt động',
      path: 'lich-su-hoat-dong',
      component: <ActivityHistoryPage />,
    },
  ]

  //useState
  const [active, setActive] = useState('1')
  const [modalCreateProject, setModalCreateProject] = useState(false)

  //useEffect
  // useEffect(() => {
  //   switch (type) {
  //     case 'quan-ly-cac-du-an':
  //       return setActive('1')

  //     case 'du-an-da-xoa':
  //       return setActive('2')

  //     case 'lich-su-hoat-dong':
  //       return setActive('3')

  //     default:
  //       return
  //   }
  // }, [type])
  return (
    <div className="p-2" style={{backgroundColor: '#fff'}}>
      <div className="d-block d-md-flex  justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <img
            src={project}
            alt="dataCenter"
            className="img-fluid mr-1"
            style={{height: '50px', width: '50px'}}
          />
          <div>
            <h4>Quản lý các dự án</h4>
            <p className="mb-0">Thiết lập và quản lý các dự án trong BCA</p>
          </div>
        </div>
        <div className="mt-5 mt-md-0   text-right">
          <Button.Ripple
            color="primary"
            className="p-1"
            onClick={() => setModalCreateProject(!modalCreateProject)}
          >
            <img
              src={projectBtn}
              alt="imgs"
              className="img-fluid mr-1"
              width="25px"
              height="25px"
            />
            Tạo dự án mới
          </Button.Ripple>
        </div>
      </div>

      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className=" py-2"
      >
        <StatisticProject />
        <ChartProject />

        <Nav tabs className="mt-5">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/du-an/${ele.path}`)
                  }}
                  style={{border: 'none'}}
                >
                  {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <TabPane tabId={ele.id} key={ele.id}>
                {ele.component}
              </TabPane>
            ))}
        </TabContent>
      </div>
      <ModalCreateProject
        modalCreateProject={modalCreateProject}
        setModalCreateProject={setModalCreateProject}
      />
    </div>
  )
}

export default ProjectPage
