import React, {useEffect, useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import {
  Edit3,
  Box,
  // Youtube,
  Tag,
  User,
  Layers,
  Check,
} from 'react-feather'
import classnames from 'classnames'
import Basic from './Basic.component'
import Curriculum from './Curriculum.component'
import Outcome from './Outcome.component'
import PriceCourse from './PriceCourse.component'
import ProgramExperience from './ProgramExperience.component'
import BenefitCourse from './BenefitCourse.component'
import SeoCourse from './SeoCourse.component'

const InforCourse = () => {
  const [windowWidth, setWindowWidth] = useState(null)
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (window !== undefined) {
      updateWidth()
      window.addEventListener('resize', updateWidth)
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  })

  return (
    <div>
      <div
        className={`mt-2 ${
          windowWidth >= 769 ? 'nav-vertical' : 'account-setting-wrapper'
        }`}
      >
        <Nav className="account-settings-tab nav-left mr-0 mr-sm-3" tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '1',
              })}
              onClick={() => {
                toggle('1')
              }}
            >
              <User size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Curriculum
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '2',
              })}
              onClick={() => {
                toggle('2')
              }}
            >
              <Edit3 size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Basic
              </span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({
                active: active === '4',
              })}
              onClick={() => {
                toggle('4')
              }}
            >
              <Layers size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Program Experience
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '5',
              })}
              onClick={() => {
                toggle('5')
              }}
            >
              <Check size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Benefit
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '6',
              })}
              onClick={() => {
                toggle('6')
              }}
            >
              <Box size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Outcomes
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '7',
              })}
              onClick={() => {
                toggle('7')
              }}
            >
              <i className="fa fa-yen-sign font-size-13 "></i>
              <span className="d-md-inline-block d-none align-middle ml-1">
                Pricing
              </span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({
                active: active === '8',
              })}
              onClick={() => {
                toggle('8')
              }}
            >
              <Tag size={18} />
              <span className="d-md-inline-block d-none align-middle ml-1">
                Seo
              </span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="1">
            <Curriculum />
          </TabPane>
          <TabPane tabId="2">
            <Basic />
          </TabPane>

          <TabPane tabId="4">
            <ProgramExperience />
          </TabPane>
          <TabPane tabId="5">
            <BenefitCourse />
          </TabPane>
          <TabPane tabId="6">
            <Outcome />
          </TabPane>
          <TabPane tabId="7">
            <PriceCourse />
          </TabPane>
          <TabPane tabId="8">
            <SeoCourse />
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}

export default InforCourse
