import {Media} from 'reactstrap'
import system from '../components/icons/system.png'

const NodeItem = ({
  item = {
    id: 1000,
    title: 'Nguồn dữ liệu',
    subtitle: 'Cài đặt nguồn dữ liệu đầu vào',
    icon: system,
    code: 'system',
    type: 'system',
  },
}) => {
  return (
    <>
      <div className="employee-task d-flex justify-content-between align-items-center my-3">
        <Media draggable={false}>
          {item.icon && (
            <img
              alt="img"
              src={item.icon}
              width={item.id > 100 ? 52 : 42}
              height={item.id > 100 ? 52 : 42}
              className="mr-2"
            />
          )}

          <Media className="my-auto" body>
            <h6 className="mb-0">{item.title}</h6>
            {item.subtitle && (
              <small className="text-muted">{item.subtitle}</small>
            )}
          </Media>
        </Media>
      </div>
    </>
  )
}

export default NodeItem
