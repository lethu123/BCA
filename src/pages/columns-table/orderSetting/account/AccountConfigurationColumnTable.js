export const AccountConfigurationColumnTable = [
  {
    name: 'Tên',
    selector: 'level',
    minWidth: '250px',
    maxWidth: '350px',
    cell: row => <p className="text-primary">{row.name}</p>,
  },
  {
    name: 'Người tạo',
    selector: 'link',
    center: true,
    minWidth: '250px',
    maxWidth: '350px',
    cell: row => <p>{row.username}</p>,
  },

  {
    name: 'Quyền',
    maxWidth: '350px',
    center: true,
    cell: row => <p>{row.quyen} Quyền</p>,
  },
]
