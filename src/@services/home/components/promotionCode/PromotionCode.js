import React, {useState} from 'react'
import {Button, Card, CardBody} from 'reactstrap'
import {Plus} from 'react-feather'
// *** Components
import StatisticPromotionCode from './StatisticPromotionCode'
import ModalAddPromotion from './ModalAddPromotion'
import TablePromotionCode from './TablePromotionCode'

// *** Images
import promotionImg from 'assets/images/home/AvaPromotion.png'

const PromotionCode = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center mb-2">
          <img
            src={promotionImg}
            alt="images"
            style={{width: 40, height: 40}}
            className="mr-5"
          />
          <div>
            <h4 className="mb-0">Mã khuyến mãi</h4>
            <p className="mb-0">Tạo mã khuyến mãi</p>
          </div>
        </div>
        <div>
          <StatisticPromotionCode />
          <div className="text-right mb-5">
            <Button.Ripple
              color="primary"
              onClick={() => setCenteredModal(true)}
            >
              <Plus size={15} /> Tạo mã khuyến mãi
            </Button.Ripple>
          </div>
          <TablePromotionCode />
        </div>
        <ModalAddPromotion
          setCenteredModal={setCenteredModal}
          centeredModal={centeredModal}
        />
      </CardBody>
    </Card>
  )
}

export default PromotionCode
