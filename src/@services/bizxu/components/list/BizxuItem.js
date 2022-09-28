import {Button, Card} from 'reactstrap'

//image
import bizxubg from 'assets/images/datacenter/bizxu-gb.png'

// ** component
import {Bizxu, Heart} from 'components/icon'
import {formatCurrencyVN} from '@services/ultils'

const BizxuItem = ({toggleModal, item, setBizxuPakage}) => {
  return (
    <Card className="ecommerce-card h-100 mb-0">
      <div className="text-center position-relative">
        <div style={{height: '200px'}}>
          <img
            src={bizxubg}
            alt="images"
            className="img-fluid mr-2 h-100 w-100"
          />
        </div>

        <div
          className="rounded"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: 'white',
            position: 'absolute',
            top: '5%',
            right: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Heart height="30px" width="30px" fill="#ea5455" />
        </div>
        <div
          className="mb-0 fs-1 font-weight-bolder text-white"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h5 className="text-white font-large-2 mb-0"> {item.sales}</h5>
          <p className="mb-0 text-right">
            BizXu <Bizxu fill="white" size={10} />
          </p>
        </div>
      </div>
      <div className="p-2 text-center ">
        <h3 className="mb-1 font-weight-bolder">{item.name}</h3>
        <div className="d-flex align-items-center justify-content-center">
          <small className="mr-1">
            <strike>{formatCurrencyVN(item.price_history)} </strike>
          </small>
          <h3>{formatCurrencyVN(item.price)}</h3>
        </div>
        <Button.Ripple
          onClick={() => {
            setBizxuPakage(item)
            toggleModal()
          }}
          color="primary"
          outline
          className="w-100"
        >
          Mua BizXu
        </Button.Ripple>
      </div>
    </Card>
  )
}

export default BizxuItem
