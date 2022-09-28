import React from 'react'
import {Badge, Label} from 'reactstrap'

const FilterColumn = ({dataFilter, setDataFilter, name}) => {
  return (
    <div className="my-2">
      <Label className="font-weight-bold fs-6 text-dark">{name}</Label>
      <br />
      {dataFilter?.length > 0 &&
        dataFilter.map(ele => (
          <Badge
            key={ele.id}
            color={ele.check ? ele.color : 'light-secondary'}
            className="mr-3 cursor-pointer text-white"
            onClick={() =>
              setDataFilter(
                dataFilter.map(item =>
                  item.id === ele.id ? {...item, check: !item.check} : item,
                ),
              )
            }
          >
            {ele.value}
          </Badge>
        ))}
    </div>
  )
}

export default FilterColumn
