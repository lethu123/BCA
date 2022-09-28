import {Home} from 'react-feather'
import {Link, useParams} from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Row,
  Spinner,
} from 'reactstrap'

// *** component
import CardAccountFacebook from '@services/automation/components/card/CardAccountFacebook'
import {AutomationQuery} from '@services/automation/'

// *** page
import AccountFacebookProfile from '@services/automation/pages/AccountFacebookprofile'

const AutomationAccountFacebook = () => {
  const {id: accountId} = useParams()
  const {dataQuery: accountData} = AutomationQuery.useListAccountFB()

  if (!accountData) {
    return (
      <Button color="primary" outline>
        <Spinner color="white" size="sm" type="grow" />
        <span className="ms-50">Đang lấy dữ liệu...</span>
      </Button>
    )
  }
  let accountDetail =
    accountData && accountData.length > 0
      ? accountData.find(acc => acc.uid === accountId)
      : {}

  return (
    <div style={{backgroundColor: '#fff'}}>
      <Card>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">
              <Home size={16} style={{marginRight: 5, marginBottom: 2}} />
              Trang chủ
            </Link>
          </BreadcrumbItem>
          {accountId !== 'account-facebook' ? (
            <>
              <BreadcrumbItem active style={{cursor: 'context-menu'}}>
                <Link to="/admin/automation/account-facebook/list">
                  Tài khoản Facebook
                </Link>
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbItem active style={{cursor: 'context-menu'}}>
                <span>Tài khoản Facebook</span>
              </BreadcrumbItem>
            </>
          )}
          {accountId !== 'account-facebook' && (
            <>
              <BreadcrumbItem active style={{cursor: 'context-menu'}}>
                <span>{accountDetail?.username}</span>
              </BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
        <hr />
        <div className="mx-5">
          <Row>
            {accountId !== 'account-facebook' ? (
              <div className="px-5 w-100">
                <AccountFacebookProfile data={accountDetail} />
              </div>
            ) : (
              <>
                {accountData?.map((detailData, idx) => (
                  <Col md={4} key={idx}>
                    <CardAccountFacebook data={detailData} />
                  </Col>
                ))}
              </>
            )}
          </Row>
        </div>
      </Card>
    </div>
  )
}
export default AutomationAccountFacebook
