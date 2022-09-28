import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  // Badge,
  // Input,
  Button,
} from 'reactstrap'
import DataTable from 'react-data-table-component'
import {Navigation} from 'react-feather'
import {useHistory} from 'react-router-dom'

const LatestOrders = ({listEnronment, totalEnrolment}) => {
  const history = useHistory()
  const columns = React.useMemo(
    () => [
      {
        name: 'Student',
        minWidth: '250px',
        maxWidth: '370px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="45"
                width="45"
                src={row.student_info.picture}
                alt={row.student_info.username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.student_info.username}
                className="d-block text-bold-500 text-truncate mb-0"
                style={{cursor: 'pointer'}}
                onClick={() =>
                  history.push(`/user/${row.student_info.url}/profile/feed`)
                }
              >
                {row.student_info.username}
              </span>
              <small title={row.student_info.email}>
                {row.student_info.email}
              </small>
            </div>
          </div>
        ),
      },
      {
        name: 'Coure',
        minWidth: '300px',
        maxWidth: '350px',
        cell: row => (
          <div className="d-flex">
            <img
              src={row.course_info.thumb}
              alt="avatar"
              style={{width: 70, height: 40, borderRadius: 5, marginRight: 10}}
            />
            <div style={{maxWidth: 200}}>
              <p
                className="mb-0 text-truncate"
                style={{cursor: 'pointer'}}
                onClick={() =>
                  history.push(
                    `/hschool/courses/detail/${row.course_info.slug}`,
                  )
                }
              >
                {row.course_info.title}
              </p>
              <small>{row.course_info.category_name}</small>
            </div>
          </div>
        ),
      },
      {
        name: 'Date Created',
        minWidth: '120px',
        selector: 'date',
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.date_created}</p>
        ),
      },
      // {
      //   name: 'Status',
      //   selector: 'status',
      //   cell: row => (
      //     <Badge
      //       color={row.status === 'inactive' ? 'light-danger' : 'light-success'}
      //       pill
      //     >
      //       {row.status}
      //     </Badge>
      //   ),
      // },
      {
        name: 'Amount',
        minWidth: '70px',
        maxWidth: '100px',
        selector: 'revenue',
        cell: row => (
          <p className="text-bold-500 mb-0">
            {row.course_info.price === 0
              ? 'Free'
              : `${row.course_info.price} VND`}
          </p>
        ),
      },
      {
        name: '	Invoice',
        minWidth: '130px',
        cell: row => {
          return (
            <Button.Ripple size="sm" outline color="primary">
              <Navigation size={14} className="mr-25" />
              Invoice
            </Button.Ripple>
          )
        },
      },
    ],
    [listEnronment],
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="d-flex align-item-center">
            <span style={{marginRight: 5}}>Latest Enrolled </span>
            <div className="badge badge-pill badge-warning float-right">
              <span className="align-middle" style={{fontSize: 12}}>
                {totalEnrolment.count || 0}
              </span>
            </div>{' '}
          </div>{' '}
        </CardTitle>
      </CardHeader>
      <CardBody className="rdt_Wrapper pt-0">
        <DataTable
          className="dataTable-custom"
          data={listEnronment || []}
          columns={columns}
          noHeader
          // pagination
        />
      </CardBody>
      <div className="divider ">
        <div className="divider-text">
          <Button.Ripple className="bg-gradient-primary" color="none" size="sm">
            View more
          </Button.Ripple>
        </div>
      </div>
    </Card>
  )
}

export default LatestOrders
