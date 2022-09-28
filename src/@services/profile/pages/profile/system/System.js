import React, {useState} from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Codesandbox, ShoppingCart, UserPlus, Users} from 'react-feather'
import imgSystem from 'assets/images/user/system.png'

// *** Components
import Avatar from './Avatar'
import TableSystem from './TableSystem'
// *** Third Libary
import {Tree, TreeNode} from 'react-organizational-chart'

const System = () => {
  const [showRelation, setShowRelation] = useState(false)
  return (
    <div style={{backgroundColor: '#fff'}}>
      <Row>
        <Col lg="5">
          <Row>
            {/* Stats With Icons */}
            <Col sm="6" className="mb-2">
              <StatsVertical
                icon={<Users size={21} />}
                color="info"
                stats="1000"
                statTitle="Số thành viên"
                chooseColor={true}
              />
            </Col>
            <Col sm="6" className="mb-2">
              <StatsVertical
                icon={<UserPlus size={21} />}
                color="warning"
                stats="100"
                statTitle="Thành viên mới"
                chooseColor={true}
              />
            </Col>
            <Col sm="6" className="mb-2">
              <StatsVertical
                icon={<ShoppingCart size={21} />}
                color="danger"
                stats="50"
                statTitle="Điểm bán hàng"
                chooseColor={true}
              />
            </Col>
            <Col sm="6" className="mb-2">
              <StatsVertical
                icon={<Codesandbox size={21} />}
                color="primary"
                stats="26"
                statTitle="Điểm tuyển dụng"
                chooseColor={true}
              />
            </Col>

            {/* Stats With Icons */}
          </Row>
        </Col>
        <Col lg="7">
          <div className="h-100">
            <img
              alt="images"
              src={imgSystem}
              style={{height: '93%', width: '100%'}}
            />
          </div>
        </Col>
      </Row>
      <div>
        <TableSystem
          setShowRelation={setShowRelation}
          showRelation={showRelation}
        />
      </div>
      {showRelation && (
        <div className="mt-10">
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<Avatar />}
          >
            <TreeNode label={<Avatar />}>
              <TreeNode label={<Avatar />} />
            </TreeNode>
            <TreeNode label={<Avatar />}>
              <TreeNode label={<Avatar />}>
                <TreeNode label={<Avatar />} />
                <TreeNode label={<Avatar />} />
              </TreeNode>
            </TreeNode>
            <TreeNode label={<Avatar />}>
              <TreeNode label={<Avatar />} />
              <TreeNode label={<Avatar />} />
            </TreeNode>
          </Tree>
        </div>
      )}
    </div>
  )
}

export default System
