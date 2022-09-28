import {useCallback, useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import ReactFlow, {Controls, Background} from 'react-flow-renderer'
import {Alert, Button, Card} from 'reactstrap'

import {ArrowLeft} from 'react-feather'

import Spinner from '@core/components/spinner/Fallback-spinner'

import {FullScreen, useFullScreenHandle} from 'react-full-screen'

import HandleButtonLayout from '../components/event/HandleButtonLayout'

import CustomSelectorNode from './CustomSelectorNode'

import {getLayoutedElements} from '../components/util/Util'

// *** Query
import AutomationQuery from '@services/automation/hook/query'

// *** Style
import './custom-flow.style.scss'

// *** assets
import system from '../components/icons/system.png'

const nodeTypes = {
  customNode: CustomSelectorNode,
}

const FlowHistory = ({histories, isLoading, type = 'uid', setHistories}) => {
  const history = useHistory()
  const reactFlowWrapper = useRef(null)
  const handle = useFullScreenHandle()

  // *** States
  const [elements, setElements] = useState([])

  // *** Query

  const {useBlockTypeAction, useBlockTypeDecision, useBlockTypeFacebookAction} =
    AutomationQuery
  const {dataQuery: dataBlockTypeAction} = useBlockTypeAction()
  const {dataQuery: dataBlockTypeDecision} = useBlockTypeDecision()
  const {dataQuery: dataBlockTypeFBAction} = useBlockTypeFacebookAction({
    page: 1,
    limit: 20,
  })

  useEffect(() => {
    let nodes = []
    if (dataBlockTypeAction && dataBlockTypeDecision && dataBlockTypeFBAction) {
      nodes = [
        ...nodes,
        ...dataBlockTypeAction.data,
        ...dataBlockTypeDecision.data,
        ...dataBlockTypeFBAction.data,
      ]
      if (nodes.length > 0 && histories && histories?.length > 0) {
        let elementRes = histories.map(el =>
          el.code
            ? {
                ...el,
                data: {
                  ...nodes.find(node => node.code === el.code),
                  title: el.title,
                  isNoSetting: true,
                  ...el.task_object,
                  history_info: el.history_info ? el.history_info : null,
                },
              }
            : el,
        )
        elementRes = elementRes.map(el => {
          if (el.source) {
            return {
              ...el,
              sourceHandle: null,
              targetHandle: null,
              type: 'smoothstep',
              animated: true,
              style: {
                stroke: '#fff',
              },
              arrowHeadType: 'arrow',
              labelStyle: {
                fill: '#f6ab6c',
                fontWeight: 700,
              },
            }
          } else {
            if (el.code === 'data_source') {
              return {
                ...el,
                data: {
                  ...el.data,
                  id: 1001,
                  title: 'Nguồn dữ liệu',
                  subtitle: 'Cài đặt nguồn dữ liệu đầu vào',
                  icon: system,
                  code: 'data_source',
                  type: 'data_source',
                },
              }
            } else if (el.code === 'auto_task') {
              return {
                ...el,
                data: {
                  ...el.data,
                  id: 1001,
                  icon: system,
                  type: 'data_source',
                  title: 'Nhãn hành động',
                  subtitle: 'Cài đặt gán nhãn hành động',
                  code: 'auto_task',
                },
              }
            } else {
              return {
                ...el,
                data: {
                  ...el?.data,
                  type:
                    el.code === 'exit'
                      ? 'exit'
                      : el?.data?.block_type?.includes('ACTION')
                      ? 'action'
                      : 'decide',
                },
              }
            }
          }
        })
        const layoutedElements = getLayoutedElements(elementRes, 'TB')

        setElements(layoutedElements)
      }
    }
  }, [
    dataBlockTypeAction,
    dataBlockTypeDecision,
    dataBlockTypeFBAction,
    histories,
  ])

  //////////////////////// *** onLoad
  const onLoad = _reactFlowInstance => {
    _reactFlowInstance.fitView()
  }

  const onElementClick = useCallback(
    (event, element) => {
      setHistories(element.data)
    },
    [setHistories],
  )

  const onLayout = useCallback(
    direction => {
      const layoutedElements = getLayoutedElements(elements, direction)
      setElements(layoutedElements)
    },
    [elements],
  )

  if (isLoading) {
    return <Spinner />
  }

  if (!histories || histories?.length === 0 || elements.length === 0) {
    return (
      <Alert color="danger">
        <div className="alert-body d-flex justify-content-between">
          <span className="font-weight-bold">Chưa có dữ liệu</span>
          <Button.Ripple
            className="btn-icon"
            size="sm"
            color="warning"
            onClick={() =>
              history.push(`/admin/potential-customers/potential-customers`)
            }
          >
            <ArrowLeft size={16} />
          </Button.Ripple>
        </div>
      </Alert>
    )
  }

  console.log(histories)

  return (
    <Card>
      <FullScreen handle={handle}>
        <div className="dndflow">
          <div
            className="reactflow-wrapper"
            style={{height: 1080}}
            ref={reactFlowWrapper}
          >
            <ReactFlow
              elements={elements}
              onLoad={onLoad}
              onElementClick={onElementClick}
              nodeTypes={nodeTypes}
              connectionLineStyle={{stroke: '#fff'}}
              style={{background: '#1A192B'}}
            >
              <Controls />
              <Background />
              <HandleButtonLayout
                onLayout={onLayout}
                automationType={'job'}
                handle={handle}
              />
            </ReactFlow>
          </div>
        </div>
      </FullScreen>
    </Card>
  )
}

export default FlowHistory
