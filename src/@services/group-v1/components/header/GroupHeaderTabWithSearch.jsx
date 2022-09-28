import {useState} from 'react'
import {MoreVertical, Search} from 'react-feather'
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap'
const GroupHeaderTabWithSearch = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const toggle = () => {
    setdropdownOpen(!dropdownOpen)
  }
  return (
    <>
      <div className="d-flex align-items-center mb-2 bg-white p-2 rounded mt-2 mb-2">
        <InputGroup style={{maxWidth: '600px'}}>
          <Input placeholder="search..." className="myinputSearch" />
          <InputGroupText className={`cursor-pointer mycustom_input_search`}>
            <Search size={24} />
          </InputGroupText>
        </InputGroup>
        <Dropdown className="ml-auto" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            tag="a"
            onClick={toggle}
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
            className="position-relative dropdownToggle"
          >
            <MoreVertical size={24} />
          </DropdownToggle>
          <DropdownMenu className="p-2 rounded custom-menu-show" end tag="ul">
            <li className="mb-2 cursor-pointer">Last Active</li>
            <li className="mb-2 cursor-pointer">Most Members</li>
            <li className="mb-2 cursor-pointer">Newly Created</li>
            <li className="cursor-pointer">Alphabetical</li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  )
}

export default GroupHeaderTabWithSearch
