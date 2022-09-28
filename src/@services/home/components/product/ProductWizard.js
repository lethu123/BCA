import {useRef, useState} from 'react'
import Wizard from '@core/components/wizard'
import InfomationSellGoodsStep from './steps-with-validation/InfomationSellGoodsStep'
import OtherInfomationStep from './steps-with-validation/OtherInfomationStep'
import ImageProductStep from './steps-with-validation/ImageProductStep'
import AddProductStep from './steps-with-validation/AddProductStep'
import {Link, PlusSquare, Image, Info} from 'react-feather'

import './Product.style.scss'

const ProductWizard = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'addProduct',
      title: 'Thêm sản phẩm',
      subtitle: 'Thêm SP mới',
      icon: <PlusSquare size={18} />,
      content: <AddProductStep stepper={stepper} type="wizard-modern" />,
    },
    {
      id: 'image',
      title: 'Hình ảnh',
      subtitle: 'Hình ảnh sản phẩm',
      icon: <Image size={18} />,
      content: <ImageProductStep stepper={stepper} type="wizard-modern" />,
    },
    {
      id: 'order',
      title: 'Thông tin bán hàng',
      subtitle: 'Thông tin bán hàng',
      icon: <Info size={18} />,
      content: (
        <InfomationSellGoodsStep stepper={stepper} type="wizard-modern" />
      ),
    },
    {
      id: 'buy',
      title: 'Thông in khác',
      subtitle: 'Thông tin SP liên quan',
      icon: <Link size={18} />,
      content: <OtherInfomationStep stepper={stepper} type="wizard-modern" />,
    },
  ]

  return (
    <div className="horizontal-wizard productWizard">
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default ProductWizard
