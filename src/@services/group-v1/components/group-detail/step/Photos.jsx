import {useState} from 'react'
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import AlbumImages from '../Photos/AlbumImages'
import SingleImages from '../Photos/SingleImages'

const renderPhotosStep = [
  {
    id: '1',
    item: <SingleImages />,
  },
  {
    id: '2',
    item: <AlbumImages />,
  },
]
const Photos = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <>
      <Card>
        <CardBody>
          <Nav className="mb-0" pills>
            <NavItem className="me-2">
              <NavLink
                className="nav-link-custom title-16-700-24"
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                Photos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-custom title-16-700-24"
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Album
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mt-5" activeTab={active}>
            {renderPhotosStep.map(item => (
              <TabPane key={item.id} tabId={item.id}>
                {item.item}
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </>
  )
}

export default Photos
