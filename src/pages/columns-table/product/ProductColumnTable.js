import moment from 'moment'
import {Badge, CustomInput} from 'reactstrap'
export const ProductColumnTable = [
  {
    name: 'Sản phẩm',
    minWidth: '300px',
    maxWidth: '350px',
    selector: 'topic',
    cell: row => (
      <div className="d-flex" style={{padding: '15px 0'}}>
        <img
          src="https://product.hstatic.net/1000347556/product/f23ea8101f27e579bc36_595556e1b27a4a74986f7d90fff33c38_large.jpg"
          alt="images"
          style={{width: 50, height: 50, borderRadius: '50%', marginRight: 10}}
        />
        <div>
          <p className="mb-0">
            SARMENTOSA IMMUNE SUPPORT (75 ml) (Bổ phế hóa đờm)
          </p>
          <small>Mã sản phẩm : 1234</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    maxWidth: '150px',
    selector: 'campaign_info',
    cell: row => (
      <div>
        <CustomInput
          type="switch"
          label="open"
          className="custom-control-secondary"
          id={row.id}
          name="icon-secondary"
          inline
          defaultChecked
        />
      </div>
    ),
  },
  {
    name: 'Số lượng',
    minWidth: '100px',
    maxWidth: '120px',
    sortable: true,
    cell: row => <p>1000</p>,
  },
  {
    name: 'Khả dụng',
    maxWidth: '110px',
    selector: 'send_date',
    sortable: true,
    cell: row => <p>500</p>,
  },
  {
    name: 'Tồn kho',
    maxWidth: '110px',
    selector: 'received_date',
    sortable: true,
    cell: row => <p>200</p>,
  },
  {
    name: 'Loại bệnh',
    maxWidth: '110px',
    cell: row => <p>Đờm</p>,
  },
  {
    name: 'Nhóm hàng',
    maxWidth: '130px',
    cell: row => <p>Sức khỏe</p>,
  },
  {
    name: 'Nhà cung cấp',
    minWidth: '150px',
    maxWidth: '160px',
    cell: row => <p>Samsamviet</p>,
  },
  {
    name: 'Ngày cung cấp',
    maxWidth: '180px',
    selector: 'status',
    sortable: true,
    cell: row => <p>{moment(new Date()).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
]
