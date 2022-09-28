import React from 'react'
import {Filter} from 'react-feather'
import {
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'

const FilterChart = ({data}) => {
  return (
    <div className="ml-10 ">
      <UncontrolledButtonDropdown>
        <DropdownToggle color="primary" outline className="p-1 rounded-lg">
          <Filter size={20} />
        </DropdownToggle>
        <DropdownMenu
          style={{width: '500px', border: '1px solid gray'}}
          className="p-2"
        >
          {data.length > 0 &&
            data.map(ele => (
              <div className="d-flex justify-content-between" key={ele.id}>
                <p className="mb-0 text-truncate" style={{maxWidth: '230px'}}>
                  {ele.name}
                </p>
                <div>
                  <CustomInput
                    inline
                    type="checkbox"
                    id={`check1${ele.id}`}
                    className="mb-2 mr-5"
                    label="Bên trái"
                  />
                  <CustomInput
                    inline
                    type="checkbox"
                    id={`check2${ele.id}`}
                    className="mb-2"
                    label="Bên phải"
                  />
                </div>
              </div>
            ))}
          <div className="mt-5 w-100 justify-content-end d-flex">
            <DropdownItem
              color="primary"
              style={{border: '1px solid #E6641F', borderRadius: '10px'}}
              className="mr-2 text-primary"
            >
              Lọc
            </DropdownItem>
            <DropdownItem
              color="secondary"
              style={{border: '1px solid #ccc', borderRadius: '10px'}}
            >
              Hủy
            </DropdownItem>
          </div>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}

export default FilterChart
