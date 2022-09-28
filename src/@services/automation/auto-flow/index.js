import {useEffect, useState} from 'react'

import {ReactFlowProvider} from 'react-flow-renderer'
import {useHistory, useParams, useLocation} from 'react-router'
import {Row, Col, Alert, Button, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import LeftSidebar from '../components/sidebar/LeftSidebar'
import RightContent from './RightContent'
import Spinner from '@core/components/spinner/Fallback-spinner'

// *** Hook
import AutomationQuery from '../hook/query'
import AutomationMutation from '../hook/mutation'

// ***  CONTEXT
import {AutomationProvider} from '../context'
import Card from 'reactstrap/lib/Card'
import {Link} from 'react-router-dom'
import {Home} from 'react-feather'

const AutoFlow = () => {
  // *** Hook
  let {id, type: typeAutoJob} = useParams()
  let {pathname} = useLocation()
  const history = useHistory()
  let type =
    pathname && pathname.includes('auto-job')
      ? 'job'
      : pathname && pathname.includes('auto-task')
      ? 'task'
      : null

  // *** Query
  const {mutate: mutateCreateAutoJob, isSuccess: isSuccessCreateAutoJob} =
    AutomationMutation.useHandleAutojobAutomation(type, id)
  const {mutate: mutateDelete, isSuccess: isSuccessDelete} =
    AutomationMutation.useDeleteAutoJobAutomation()
  const {data: flowInfoRes, isLoading} = AutomationQuery.useInfoAutomation(id)
  const {dataQuery: dataBlockTypeAction} = AutomationQuery.useBlockTypeAction()
  const {dataQuery: dataBlockTypeDecision} =
    AutomationQuery.useBlockTypeDecision()
  // const {dataQuery: dataBlockTypeFBAction} =
  //   AutomationQuery.useBlockTypeFacebookAction({
  //     page: 1,
  //     limit: 20,
  //   })

  // *** State
  const [automationInfo, setAutomationInfo] = useState(null)

  useEffect(() => {
    let nodes = []
    if (id !== 'create') {
      if (dataBlockTypeAction && dataBlockTypeDecision) {
        nodes = [
          ...nodes,
          ...dataBlockTypeAction.data,
          ...dataBlockTypeDecision.data,
        ]
        if (nodes.length > 0 && flowInfoRes) {
          if (Array.isArray(flowInfoRes.elements)) {
            flowInfoRes.elements = flowInfoRes.elements.map(el =>
              el.code
                ? {
                    ...el,
                    data: {
                      ...nodes.find(node => node.code === el.code),
                      title: el.title,
                    },
                  }
                : el,
            )

            setAutomationInfo(flowInfoRes)
          }
        } else {
          setAutomationInfo(null)
        }
      }
    }
  }, [dataBlockTypeAction, dataBlockTypeDecision, flowInfoRes, id])

  const onSaveDataRequest = data => {
    let newElements = [...data.elements]

    newElements = newElements.map(el =>
      el.source
        ? {id: el.id, source: el.source, target: el.target, label: el.label}
        : {
            code: el.code,
            id: el.id,
            position: el.position,
            title: el.title,
            type: el.type,
            typeNode: el.typeNode,
          },
    )

    let dataRequest = {
      ...data,
      id: id !== 'new' && id !== 'create' ? id : null,
      elements: JSON.stringify(newElements),
      datasubmit: JSON.stringify(data.datasubmit),
      edges: JSON.stringify(data.edges),
      data_field: JSON.stringify([data.data_field]),
      account: JSON.stringify(data.account),
    }

    let formData = new FormData()

    Object.keys(dataRequest).forEach(key => {
      formData.append(key, dataRequest[key])
    })

    console.log('DATA REQUEST', dataRequest)

    mutateCreateAutoJob(formData)
  }

  if (isSuccessCreateAutoJob || isSuccessDelete) {
    history.push(
      `/admin/automation/${type === 'job' ? 'auto-job' : 'auto-task'}`,
    )
  }
  if (isLoading) return <Spinner />

  return (
    <AutomationProvider>
      <ReactFlowProvider>
        <Card>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">
                <Home size={16} style={{marginRight: 5, marginBottom: 2}} />
                Trang chủ
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/admin/automation/auto-job">Kịch bản (Auto job)</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Create</BreadcrumbItem>
            <BreadcrumbItem>{typeAutoJob}</BreadcrumbItem>
          </Breadcrumb>
          <div className="mx-2">
            <Row>
              <Col lg="3">
                <LeftSidebar
                  dataBlockTypeAction={dataBlockTypeAction}
                  dataBlockTypeDecision={dataBlockTypeDecision}
                  type={typeAutoJob}
                />
              </Col>
              <Col lg="9">
                {!automationInfo && id !== 'create' ? (
                  <Alert color="danger">
                    <h4 className="alert-heading mb-4">
                      Không tìm thấy thông tin của #{id}
                    </h4>

                    <Button.Ripple
                      color="danger"
                      outline
                      onClick={() => {
                        return history.push(`/admin/automation/auto-job/create`)
                      }}
                    >
                      Tạo mới
                    </Button.Ripple>
                  </Alert>
                ) : (
                  <RightContent
                    automationType={type}
                    automationId={id}
                    onSubmit={onSaveDataRequest}
                    automationInfo={automationInfo}
                    onDelete={() => mutateDelete(id)}
                  />
                )}
              </Col>
            </Row>
          </div>
        </Card>
      </ReactFlowProvider>
    </AutomationProvider>
  )
}

export default AutoFlow
