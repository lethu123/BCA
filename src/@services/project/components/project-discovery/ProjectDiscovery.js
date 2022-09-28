import React, {useState} from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Input,
} from 'reactstrap'

// ** component
import ProjectOpen from './ProjectOpen'
// import ProjectCompleted from './ProjectCompleted'
// ** query
import {DataProjectQuery} from '@services/project'
// *** Styles
import '@core/scss/base/pages/app-ecommerce.scss'

const ProjectDiscovery = () => {
  const [active, setActive] = useState('1')
  const [params, setParams] = useState({page: 1, limit: 6, is_done: false})

  const {data: listProject, isFetching} =
    DataProjectQuery.useListProjectData(params)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
      if (active === '1') {
        setParams({...params, is_done: true, search: null})
      } else {
        setParams({...params, is_done: false, search: null})
      }
    }
  }

  const SearchComp = () => {
    const [value, setValue] = useState(params.search)
    return (
      <Row className="mb-2 justify-content-end">
        <Col lg="4">
          <form
            onSubmit={e => {
              e.preventDefault()
              const value = e.target.elements.search.value.trim()
              setParams({...params, search: value || null, page: 1})
            }}
          >
            <Input
              placeholder="search"
              name="search"
              value={value}
              onChange={e => {
                if (!e.target.value.trim())
                  setParams({...params, search: null, page: 1})
                setValue(e.target.value)
              }}
            />
          </form>
        </Col>
      </Row>
    )
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
            className="border-0"
          >
            Dự án Đang mở
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
            className="border-0"
          >
            Dự án Hoàn thành
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <SearchComp />
          <ProjectOpen
            setParams={setParams}
            params={params}
            data={listProject}
            isFetching={isFetching}
          />
        </TabPane>
        <TabPane tabId="2">
          <SearchComp />
          <ProjectOpen
            setParams={setParams}
            params={params}
            data={listProject}
            isFetching={isFetching}
          />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default ProjectDiscovery
