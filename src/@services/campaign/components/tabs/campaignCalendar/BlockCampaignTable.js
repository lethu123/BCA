import {Table, Badge, Media} from 'reactstrap'

const BlockCampaignTable = ({datas = [], setBlockId}) => {
  // const {uid} = useParams()
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Block</th>
          <th>Loại</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        {datas.length > 0 &&
          datas.map(ele => (
            <tr key={ele.block_object_id}>
              <td>
                <div className="employee-task d-flex justify-content-between align-items-center my-3">
                  <Media>
                    {ele.icon && (
                      <img
                        alt="img"
                        src={ele.icon}
                        width={ele.id > 100 ? 52 : 42}
                        height={ele.id > 100 ? 52 : 42}
                        className="mr-2"
                      />
                    )}

                    <Media className="my-auto" body>
                      <h6 className="mb-0">{ele.title}</h6>
                      {ele.subtitle && (
                        <small className="text-muted">{ele.subtitle}</small>
                      )}
                    </Media>
                  </Media>
                </div>
              </td>
              <td>
                <Badge
                  color={`light-${
                    ele.block_type === 'ACTION' ? 'success' : 'info'
                  }`}
                >
                  {ele.block_type === 'ACTION' ? 'hành động' : 'quyết định'}
                </Badge>
              </td>
              <td>
                <Badge
                  color={
                    ele.status_info?.key === 'PENDING'
                      ? 'secondary'
                      : ele.status_info?.key === 'RUNNING'
                      ? 'warning'
                      : ele.status_info?.key === 'COMPLETE'
                      ? 'primary'
                      : 'danger'
                  }
                >
                  {ele.status_info?.name}
                </Badge>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default BlockCampaignTable
