import SwitchField from 'components/form/SwitchField'
import React, {useState} from 'react'
import {ExternalLink} from 'react-feather'
import {Card} from 'reactstrap'
import StatisticManageData from '../statistic/StatisticManageData'
import TableManageData from '../table/TableManageData'

const ManageDataPage = () => {
  const [status, setStatus] = useState(false)
  const [statusUV, setStatusUV] = useState(false)
  return (
    <div className="mt-1">
      <div className="d-md-flex d-block align-items-center mb-2">
        <Card className="p-3 mb-0 mr-3 mb-2 mb-md-0">
          <div className="d-lg-flex align-items-center w-100 justify-content-lg-between">
            <div>
              <p className="mb-0 font-weight-bold">
                LandingPage khách hàng tiềm năng
              </p>
              <div className="d-flex align-items-center">
                <SwitchField
                  name="switch"
                  // label="Switch Field"

                  color="warning"
                  outline
                  onChange={(name, value) => setStatus(!status)}
                />
                <span style={{fontSize: '15px'}}>
                  {status === true ? 'Kích hoạt' : 'Chưa kích hoạt'}
                </span>
              </div>
            </div>

            <ExternalLink size={20} className="text-success cursor-pointer" />
          </div>
          <u className="mb-0 text-primary mt-1 cursor-pointer ">
            http://bcavietnam.com/hoangquyen/1
          </u>
        </Card>
        <Card className="p-3 mb-0">
          <div className="d-lg-flex align-items-center w-100 justify-content-lg-between">
            <div>
              <p className="mb-0 font-weight-bold">
                LandingPage ứng viên tiềm năng
              </p>
              <div className="d-flex align-items-center">
                <SwitchField
                  name="switch"
                  // label="Switch Field"

                  color="success"
                  outline
                  onChange={(name, value) => setStatusUV(!statusUV)}
                />
                <span style={{fontSize: '15px'}}>
                  {statusUV === true ? 'Kích hoạt' : 'Chưa kích hoạt'}
                </span>
              </div>
            </div>
            <ExternalLink size={20} className="text-success cursor-pointer" />
          </div>
          <u className="mb-0 text-primary mt-1 cursor-pointer">
            http://bcavietnam.com/hoangquyen/1
          </u>
        </Card>
      </div>

      <StatisticManageData />
      <TableManageData />
    </div>
  )
}

export default ManageDataPage
