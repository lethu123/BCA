import {useEffect, useState} from 'react'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Table, Badge, Button} from 'reactstrap'

const handleValue = (key, value) => {
  if (key && !key.includes('date')) {
    return JSON.parse(value)
  }
}

const LABELS = {
  funnels: 'Phễu khách hàng',
  tags: 'Tags',
  keywords: 'Chủ đề quan tâm',
  education: 'Học vấn',
  work: 'Nghề nghiệp',
  address: 'Địa chỉ',
  demographic: 'Nhân khẩu học',
  gender: 'Giới tính',
  from_to_date: 'Từ ngày đến ngày',
  time_slot: 'Khung giờ',
}

const FilterStep2Preview = ({filter, stepper}) => {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    let keys = Object.keys(filter)
    if (keys && keys.length > 0) {
      let arr = []
      keys.forEach(key => {
        if (filter[key]) {
          arr.push({
            type: key,
            value: handleValue(key, filter[key]),
            label: LABELS[key],
          })
        }
      })
      setDatas(arr)
    }
  }, [filter])

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá trị</th>
          </tr>
        </thead>
        <tbody>
          {datas.length > 0 &&
            datas.map(d => (
              <tr key={d.type}>
                <td>{d.label}</td>
                <td>
                  {Array.isArray(d.value)
                    ? d.value.map(v => (
                        <Badge
                          key={v}
                          pill
                          color="light-secondary"
                          className="mx-1"
                        >
                          {v}
                        </Badge>
                      ))
                    : d.value}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <div>
          <Button.Ripple
            color="secondary"
            className="btn-prev mr-3"
            size="sm"
            type="button"
            outline
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle mr-sm-2 mr-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Quay lại
            </span>
          </Button.Ripple>
        </div>
        <div>
          <Button.Ripple
            size="sm"
            type="button"
            color="primary"
            className="btn-next"
            onClick={() => stepper.next()}
          >
            <span className="align-middle d-inline-block">Tiếp theo</span>
            <ArrowRight
              size={14}
              className="align-middle ml-sm-2 ml-0"
            ></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default FilterStep2Preview
