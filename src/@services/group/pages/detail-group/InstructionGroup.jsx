import {Card, CardBody} from 'reactstrap'

const InstructionGroup = ({infoGroup}) => {
  if (!infoGroup) return null
  return (
    <Card>
      <CardBody>
        <h6 className="mb-2">Giới thiệu</h6>
        <p className="text-primary text-center" style={{fontSize: 20}}>
          {infoGroup.group_name}
        </p>
        <div>
          <h6 className="mb-75">Mô tả nhóm</h6>
          <p style={{fontStyle: 'italic'}}>"{infoGroup.group_description}"</p>
        </div>
        <div>
          <div className="overflow-scroll">
            <p>
              <span className="font-weight-bolder">ID nhóm : </span>{' '}
              {infoGroup._id}
            </p>

            <p>
              <span className="font-weight-bolder">Số thành viên : </span>{' '}
              {infoGroup.members?.length}
            </p>

            <p>
              {' '}
              <span className="font-weight-bolder">Địa chỉ : </span>{' '}
              {`${infoGroup.group_address?.group_city}, ${infoGroup.group_address?.group_district}, ${infoGroup.group_address?.group_commune}`}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default InstructionGroup
