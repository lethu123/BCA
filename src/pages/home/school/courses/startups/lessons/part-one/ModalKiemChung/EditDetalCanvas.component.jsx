import React, {useState} from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap'
import './EditDetalCanvas.style.scss'
import EditDetailCanvasForm from './EditDetailCanvasForm.component'
import EditDetalCanvasHeader from './EditDetalCanvasHeader.component'
import EditDetalCanvasNoteHeader from './EditDetalCanvasNoteHeader.component'
import EditDetalCanvasMessageHeader from './EditDetalCanvasMessageHeader.component'
import image1 from 'assets/images/imgBannerStartupTool/team-building.png'
import {Link} from 'react-router-dom'

import Topic from './Topic.component'
import {Home} from 'react-feather'
function EditDetalCanvas() {
  const listTeamBuilding = [
    {
      id: 154,
      name: 'Development',
      img: '',
      slug: 'development',
    },

    {
      id: 152,
      name: 'Business',
      img: '',
      slug: 'business',
    },
    {
      id: 165,
      name: 'Finance & Accounting',
      img: '',
      slug: 'finance_accounting',
    },
    {
      id: 172,
      name: 'IT & Software',
      img: '',
      slug: 'it_software',
    },
    {
      id: 174,
      name: 'Office Productivity',
      img: '',
      slug: 'office_productivity',
    },
    {
      id: 175,
      name: 'Personal Development',
      img: '',
      slug: 'personal_development',
    },
    {
      id: 216,
      name: 'Design',
      img: '',
      slug: 'design',
    },
    {
      id: 179,
      name: 'Marketing',
      img: '',
      slug: 'maketing',
    },
  ]
  const renderToolsTopic = () => {
    return (
      <>
        <div className="image-header-tool mb-2">
          <img
            src={topic[state.activeTab].img}
            className="w-100"
            alt="not found"
          />
        </div>
        <Breadcrumb className="beadcrumbStartupTool pt-0">
          <h2 className="pr-2" style={{borderRight: '1px solid #cccccc'}}>
            Startup Tools
          </h2>
          <Home className="mx-1" size={20} color="#ff6700" />
          <BreadcrumbItem>
            <Link to="#"> HStartup </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Tools </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <span> Ideation </span>
          </BreadcrumbItem>
        </Breadcrumb>
        {/*Category*/}
        {topic[state.activeTab].topic &&
          topic[state.activeTab].topic.length > 0 && (
            <Topic
              listTopic={topic[state.activeTab].topic}
              title={topic[state.activeTab].title}
            />
          )}
      </>
    )
  }
  const topic = [
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
    {
      img: image1,
      topic: listTeamBuilding,
      title: 'Team Building’s Courses Suggested',
    },
  ]
  const [state, setState] = useState({
    activeTab: '3',
    activeContent: 'Product Development',
    windowWidth: null,
  })

  const [active, setActive] = useState('1')
  return (
    <div>
      {renderToolsTopic()}
      <Card style={{backgroundColor: '#FAFAFA'}}>
        <CardHeader className={'headerGradientGreen'}>
          <EditDetalCanvasHeader
            active={active}
            setActive={data => setActive(data)}
          />
        </CardHeader>
        <CardBody className="pb-1 pb-xl-0  pr-1 pr-xl-0 pt-1 pt-xl-0">
          <Row>
            <Col xl="8" className="order-2 order-xl-1">
              <EditDetailCanvasForm />
            </Col>
            <Col xl="4" className="order-1 order-xl-2">
              <TabContent activeTab={active}>
                <TabPane tabId="1">
                  <EditDetalCanvasNoteHeader />
                </TabPane>
                <TabPane tabId="2">
                  <EditDetalCanvasMessageHeader />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default EditDetalCanvas
