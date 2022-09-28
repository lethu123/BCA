import React from 'react'
import {CardBody, Badge, Input, Button} from 'reactstrap'
import DataTable from 'react-data-table-component'
import {Star, Search} from 'react-feather'

const CustomHeader = props => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="add-new mr-1">
        <Button.Ripple color="primary">Add New</Button.Ripple>
      </div>
      <div className="position-relative has-icon-left mb-1">
        <Input value={props.value} onChange={e => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </div>
  )
}

class InstructorTable extends React.Component {
  state = {
    columns: [
      {
        name: 'Name',
        selector: 'username',
        sortable: true,
        minWidth: '200px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="rounded-circle"
                height="36"
                width="36"
                src={row.avatar}
                alt={row.username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.username}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.username}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        ),
      },
      {
        name: 'Course',
        selector: 'c_course',
        sortable: true,
        maxWidth: '50px',
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.c_course}</p>
        ),
      },
      {
        name: 'Status',
        selector: 'status',
        maxWidth: '50px',
        sortable: true,
        cell: row => (
          <Badge
            color={row.status === 'inactive' ? 'light-danger' : 'light-success'}
            pill
          >
            {row.status}
          </Badge>
        ),
      },
      {
        name: 'Price',
        selector: 'price',
        sortable: true,
        maxWidth: '50px',
        cell: row => <p className="text-bold-500 mb-0">{row.price}</p>,
      },
      {
        name: 'Skills',
        selector: 'skill',
        cell: row => (
          <p className="text-bold-500 my-1">
            {row.skills.length > 0 ? (
              row.skills.map(data => (
                <Badge
                  key={data.id}
                  pill
                  className="badge-glow m-50"
                  style={{
                    backgroundColor: 'rgba(83, 105, 248, 0.6)',
                  }}
                >
                  {data.name}
                </Badge>
              ))
            ) : (
              <Badge
                pill
                className="badge-glow"
                style={{
                  backgroundColor: 'rgba(83, 105, 248, 0.6)',
                }}
              >
                Development
              </Badge>
            )}
          </p>
        ),
      },
      {
        name: 'Feedback',
        selector: '',
        sortable: true,
        cell: row => {
          return (
            <div className="d-flex flex-column align-items-center">
              <ul className="list-inline mb-0">
                {[...Array(Math.round(parseFloat(row.rating_range.sum)))].map(
                  (_, idx) => (
                    <li className="list-inline-item" key={idx}>
                      <Star size="20" className="text-warning" />
                    </li>
                  ),
                )}
                {[
                  ...Array(5 - Math.round(parseFloat(row.rating_range.sum))),
                ].map((_, idx) => (
                  <li className="list-inline-item" key={idx}>
                    <Star size="20" className="text-muted" />
                  </li>
                ))}
                <li className="ml-1">({row.c_rating})</li>
              </ul>
            </div>
          )
        },
      },
    ],
    data: this.props.instructors,
    filteredData: [],
    value: '',
  }

  handleFilter = e => {
    let value = e.target.value
    let data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({value})

    if (value.length) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.username.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase())
        let includesCondition =
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({filteredData})
    }
  }
  handleRowClicked = row => {
    const updatedData = this.state.data.map(item => {
      if (row.id !== item.id) {
        return item
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected,
      }
    })

    this.setState({data: updatedData})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.idRemove !== this.props.idRemove) {
      this.setState({
        data: this.state.data.map(item => ({
          ...item,
          toggleSelected:
            item.id === this.props.idRemove ? false : item.toggleSelected,
        })),
      })
    }
  }

  render() {
    let {data, columns, value, filteredData} = this.state
    return (
      <CardBody className="rdt_Wrapper">
        <DataTable
          className="dataTable-custom"
          data={value.length ? filteredData : data}
          columns={columns}
          noHeader
          pagination
          subHeader
          subHeaderComponent={
            <CustomHeader value={value} handleFilter={this.handleFilter} />
          }
          selectableRows
          onRowClicked={this.handleRowClicked}
          selectableRowsHighlight={true}
          selectableRowSelected={row => row.toggleSelected}
          onSelectedRowsChange={({selectedRows}) =>
            this.props.handleSelectInstructor(selectedRows)
          }
        />
      </CardBody>
    )
  }
}

export default InstructorTable
