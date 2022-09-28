// import {Star} from 'react-feather'
// import moment from 'moment'
// import Rating from 'react-rating'
import {Link} from 'react-router-dom'
import {Badge} from 'reactstrap'

// ** ASSETS --------------------------------
import image from 'assets/images/avatars/avatar-blank.png'

export const PotentialCustomersColumnTable = [
  {
    name: 'Tên ứng viên',
    selector: 'name',
    minWidth: '200px',
    cell: row => {
      return (
        <div className="d-flex align-center-center">
          <img
            src={row.prf_picture}
            alt="avatar"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              marginRight: 10,
            }}
            onError={e => {
              e.target.onerror = null
              e.target.src = image
            }}
          />
          <div>
            <Link
              to={`/admin/potential-customers/user/${row.prf_id}`}
              className="cursor-pointer text-primary mb-0"
            >
              {row.prf_name}
            </Link>
            <p className="mb-0">ID: {row.prf_id}</p>
          </div>
        </div>
      )
    },
  },
  {
    name: 'Giới tính',
    width: '120px',
    cell: row => <p>{row.prf_gender}</p>,
  },
  {
    name: 'Số điện thoại',
    selector: 'phone',
    maxWidth: '200px',
    cell: row => (
      <div>
        {row.phone &&
          row.phone.length > 0 &&
          row.phone.map(p => (
            <Badge key={p} color="light-secondary" className="mr-2">
              {p}
            </Badge>
          ))}
      </div>
    ),
  },
  {
    name: 'Email',
    selector: 'email',
    maxWidth: '200px',
    cell: row => (
      <div>
        {row.email &&
          row.email.length > 0 &&
          row.email.map(p => (
            <Badge key={p} color="light-secondary" className="mr-2">
              {p}
            </Badge>
          ))}
      </div>
    ),
  },
  {
    name: 'Khách hàng tiềm năng',
    width: '200px',
    cell: row => (
      <Badge color={'light-primary'} className="text-white" pill>
        {row.fr_name}
      </Badge>
    ),
  },
  // {
  //   name: 'Chân dung khách hàng',
  //   selector: 'buy',
  //   sortable: true,
  //   width: '250px',
  //   cell: row => (
  //     <Rating
  //       emptySymbol={<Star size={18} fill="#babfc7" stroke="#babfc7" />}
  //       fullSymbol={<Star size={18} fill="#FF9F44" stroke="#FF9F44" />}
  //       readonly
  //       initialRating={2}
  //     />
  //   ),
  // },
]
