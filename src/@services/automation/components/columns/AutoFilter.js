import React from 'react'
import {Badge} from 'reactstrap'

// *** Table Column
export const columns = [
  {
    name: 'Tên',
    selector: 'name',
    sortable: true,
    maxidth: '250px',
    cell: row => <div>{row.name}</div>,
  },
  {
    name: 'Mô tả',
    maxidth: '350px',
    cell: row => <div>{row.description}</div>,
  },
  {
    name: 'Nguồn dữ liệu',
    maxWidth: '150px',
    center: true,
    cell: row => <Badge color={'light-warning'}>Khai thác KHTN</Badge>,
  },
  {
    name: 'Tài khoản',
    selector: 'account',
    maxidth: '350px',
    cell: row => (
      <div>
        {row.account &&
          row.account.length > 0 &&
          row.account.map(a => (
            <Badge color="light-primary" pill className="mr-2 my-2">
              <div>{a.username}</div>
            </Badge>
          ))}
      </div>
    ),
  },
]
