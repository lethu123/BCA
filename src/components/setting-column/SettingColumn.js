import React from 'react'
import {ListGroup, ListGroupItem, CustomInput} from 'reactstrap'

const SettingColumn = ({columns = [], setColumns}) => {
  return (
    <div>
      <ListGroup className="mt-1">
        {columns.length > 0 &&
          columns.map((ele, idx) => (
            <ListGroupItem className="d-flex" key={ele.id}>
              <CustomInput
                inline
                type="checkbox"
                id={ele.id || ele.name}
                checked={ele.checked}
                disabled={idx === 0}
                onChange={() =>
                  setColumns(
                    columns.map(column =>
                      column.id === ele.id
                        ? {...column, checked: !column.checked}
                        : {...column},
                    ),
                  )
                }
              />
              <span
                className={
                  idx === 0
                    ? 'font-weight-bold text-primary'
                    : 'font-weight-normal'
                }
              >
                {ele.name || ele.value}
              </span>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  )
}

export default SettingColumn
