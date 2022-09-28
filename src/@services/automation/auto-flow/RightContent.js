import React, {useState, useRef, useCallback, useEffect} from 'react'
// *** UI lib components
import ReactFlow, {
  isEdge,
  MiniMap,
  addEdge,
  removeElements,
  Controls,
  Background,
  useStore,
  useZoomPanHelper,
} from 'react-flow-renderer'
import {Card} from 'reactstrap'
import {toast} from 'react-toastify'
import {uid} from 'uid'
import {FullScreen, useFullScreenHandle} from 'react-full-screen'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// *** Custom component
import HandleButtonFlow from '../components/event/HandleButtonFlow'
import CustomSelectorNode from './CustomSelectorNode'
import SettingDatasourceModal from '../components/modal/SettingDatasource'
import SelectForkInteractionModal from '../components/modal/SelectForkInteraction'
import CreateAutojob from '../components/modal/CreateAutojob'

// *** FUNCTION UTIL ********************************
import {
  // onConnectFcn,
  onConnectFcnV1,
  handleConfirmDeleteFcn,
  onElementClickFcn,
  renderLabelEdgeFcn,
  updateDataSubmitSettingFcn,
  handleAddEdgeFcn,
  // onEdgeUpdateFcn,
  onEdgeUpdateFcnV1,
  onDropFcn,
  onRestoreFcn,
  onResetFcn,
  onLayoutFcn,
  handleSubmitDataFcn,
  handleDeleteAutomationFcn,
  getInfomationFlowFcn,
  saveHistoryElementFcn,
  saveEdgesFcn,
  alertValidationNodeFcn,
  findEdgesUnconnectDataSourseFcn,
} from '../function'

// *** CONSTANT
import {
  initialElements,
  initialItem,
  initialDataSubmit,
  sizeXl,
  sizeMd,
} from '../components/constant'
// *** Style
import './custom-flow.style.scss'
// *** assets
import system from '../components/icons/system.png'
// *** Util react flow
import {getLayoutedElements, handleNodeType} from '../components/util/Util'
// *** Util common
import {findDiffElementTwoArr, updateMultipleArrState} from 'utility/Utils'
import HandleButtonLayout from '../components/event/HandleButtonLayout'

// *** Context
// import {useAutomationCtx} from '../context'

const MySwal = withReactContent(Swal)
// ***Const
const connectionLineStyle = {stroke: '#fff'}
const initBgColor = '#1A192B'

const nodeTypes = {
  customNode: CustomSelectorNode,
}

const sizeModal = ele => {
  if (sizeXl.includes(ele)) {
    return 'xl'
  } else if (sizeMd.includes(ele)) {
    return 'md'
  }
  return 'lg'
}

const RightContent = ({
  automationType,
  automationId,
  onSubmit,
  automationInfo,
  onDelete,
}) => {
  // ***  CONTEXT
  // const {initstate} = useAutomationCtx()

  // console.log('TEST PARENT STATE', initstate)

  const renderInitialElements = useCallback(() => {
    if (automationType === 'task' && automationId !== 'create') {
      return {
        ...initialElements,
        title: 'Nhãn hành động',
        data: {
          ...initialElements.data,
          title: 'Nhãn hành động',
          subtitle: 'Cài đặt gán nhãn hành động',
          code: 'auto_task',
        },
      }
    } else {
      return initialElements
    }
  }, [automationType])

  const renderInitialDataSubmit = useCallback(() => {
    if (automationType === 'task' && automationId !== 'create') {
      return {
        data_source: {
          typeNode: 'single',
          type: 'data_source',
          title: 'Nhãn hành động',
          source: null,
          target: [],
          setting: null,
        },
      }
    } else {
      return initialDataSubmit
    }
  }, [automationType])

  // *** State
  const reactFlowWrapper = useRef(null)
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [elements, setElements] = useState([renderInitialElements()])
  const [elementHistories, setElementHistories] = useState([
    {
      elements: [renderInitialElements()],
      dataSubmit: renderInitialDataSubmit(),
    },
  ])
  const [dataSubmit, setDataSubmit] = useState(renderInitialDataSubmit())
  const [edges, setEdges] = useState([])
  const [currentItem, setCurrentItem] = useState(initialItem)
  const [validationEdges, setValidationEdges] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [popoverWarnningOpen, setPopoverWarnningOpen] = useState(false)
  const [sourceForkInteraction, setSourceForkInteraction] = useState(null)
  const [modalCreate, setModalCreate] = useState(false)
  const [generalData, setGeneralData] = useState({name: '', description: ''})

  const store = useStore()
  const {setCenter} = useZoomPanHelper()

  // *** GET INFOMATION FLOW
  useEffect(() => {
    getInfomationFlowFcn({
      automationInfo,
      system,
      getLayoutedElements,
      setElements,
      setDataSubmit,
      renderInitialElements,
      setIsEdit,
      setGeneralData,
    })

    if (automationInfo) {
      const {nodes} = store.getState()
      if (nodes.length) {
        const node = nodes[0]

        const x = node.__rf.position.x + node.__rf.width / 2
        const y = node.__rf.position.y + node.__rf.height / 2
        const zoom = 0.3

        setCenter(x, y, zoom)
      }
    }
  }, [automationInfo, renderInitialElements, setCenter, store])

  // *** Confirm Delete
  const handleConfirmDelete = useCallback(
    element => {
      handleConfirmDeleteFcn({
        element,
        MySwal,
        dataSubmit,
        elements,
        isEdge,
        setDataSubmit,
        setElements,
        setElementHistories,
        updateMultipleArrState,
        currentItem,
        setCurrentItem,
      })
    },
    [currentItem, dataSubmit, elements],
  )

  // *** Open modal setting
  const onElementClick = useCallback(
    (event, element) => {
      onElementClickFcn({
        isEdge,
        element,
        setPopoverWarnningOpen,
        dataSubmit,
        handleConfirmDelete,
        currentItem,
        setCurrentItem,
        toast,
        sizeModal,
      })
    },
    [currentItem, dataSubmit, handleConfirmDelete],
  )

  // *** Onchage in setting actions decides
  const updateDataSubmitSetting = useCallback(
    (data, id) => {
      updateDataSubmitSettingFcn({
        data,
        elements,
        dataSubmit,
        id,
        setElements,
        updateMultipleArrState,
        setElementHistories,
        setDataSubmit,
        currentItem,
        setCurrentItem,
      })
    },
    [currentItem, dataSubmit, elements],
  )

  // *** handleAddEdge
  const handleAddEdge = useCallback(
    (params, source, newDataSubmit) => {
      handleAddEdgeFcn({
        params,
        renderLabelEdge: renderLabelEdgeFcn({source, elements}),
        source,
        setElements,
        addEdge,
        elements,
        elementHistories,
        setElementHistories,
        newDataSubmit,
        setSourceForkInteraction,
      })
    },
    [elementHistories, elements],
  )

  // *** onConnect
  const onConnect = useCallback(
    params => {
      onConnectFcnV1({
        params,
        elements,
        toast,
        dataSubmit,
        handleAddEdge,
        setDataSubmit,
      })
    },
    [dataSubmit, elements, handleAddEdge],
  )

  // *** Handle update edge
  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) => {
      onEdgeUpdateFcnV1({
        dataSubmit,
        elements,
        oldEdge,
        newConnection,
        toast,
        setElements,
        setDataSubmit,
        setElementHistories,
      })
    },
    [dataSubmit, elements],
  )

  //////////////////////// onElementRemove
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els))

  //////////////////////// *** onLoad
  const onLoad = _reactFlowInstance => {
    setReactFlowInstance(_reactFlowInstance)
    _reactFlowInstance.fitView()
  }

  //////////////////////// *** onDragOver
  const onDragOver = event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  // *** onDrop
  const onDrop = useCallback(
    event => {
      onDropFcn({
        event,
        elements,
        toast,
        reactFlowWrapper,
        reactFlowInstance,
        uid,
        handleNodeType,
        elementHistories,
        setElementHistories,
        dataSubmit,
        setElements,
      })
    },
    [dataSubmit, elementHistories, elements, reactFlowInstance],
  )

  // *** onRestore
  const onRestore = useCallback(() => {
    onRestoreFcn({
      elementHistories,
      setDataSubmit,
      setElements,
      setElementHistories,
    })
  }, [elementHistories])

  // *** onReset
  const onReset = useCallback(() => {
    onResetFcn({
      setElements,
      renderInitialElements,
      setElementHistories,
      renderInitialDataSubmit,
      setDataSubmit,
      setEdges,
    })
  }, [renderInitialDataSubmit, renderInitialElements])

  // *** save history element
  useEffect(() => {
    saveHistoryElementFcn({
      elements,
      elementHistories,
      setElementHistories,
      dataSubmit,
      renderInitialElements,
      renderInitialDataSubmit,
    })
  }, [elements])

  // *** save edges
  useEffect(() => {
    saveEdgesFcn({elementHistories, isEdge, dataSubmit, setEdges})
  }, [dataSubmit, elementHistories])

  // *** Change Layout
  const onLayout = useCallback(
    direction => {
      onLayoutFcn({
        elementHistories,
        getLayoutedElements,
        direction,
        setElementHistories,
      })
    },
    [elementHistories],
  )

  // *** Alert validation Node
  useEffect(() => {
    alertValidationNodeFcn({
      setValidationEdges,
      dataSubmit,
      findEdgesUnconnectDataSourse,
      edges,
      elements,
      isEdge,
    })
  }, [dataSubmit, edges])

  // *** find edges unconnect data sourse
  const findEdgesUnconnectDataSourse = edges =>
    findEdgesUnconnectDataSourseFcn({edges, findDiffElementTwoArr})

  // *** Handle submit data
  const handleSubmitData = useCallback(
    data => {
      handleSubmitDataFcn({
        data,
        findEdgesUnconnectDataSourse,
        edges,
        dataSubmit,
        automationType,
        elements,
        onSubmit,
      })
    },
    [automationType, dataSubmit, edges, elements, onSubmit],
  )

  console.log('EDGES', edges)

  // *** Handle Delete
  const handleDeleteAutomation = async () => {
    handleDeleteAutomationFcn({MySwal, onDelete})
  }

  // *** handle Set Label Fork Interaction
  const handleSetLabelForkInteraction = useCallback(
    option => {
      if (option) {
        let {newElement, newDataSubmit} = sourceForkInteraction
        if (newElement && newDataSubmit) {
          newElement = {...newElement, label: option.label}
          setDataSubmit(newDataSubmit)
          setElements(els => addEdge(newElement, els))
          if (!(elements.length > elementHistories.length)) {
            setElementHistories(elementHistoriesEl => [
              ...elementHistoriesEl,
              {elements: [...elements, newElement], dataSubmit: newDataSubmit},
            ])
          }
        }
        setSourceForkInteraction(null)
      }
    },
    [elementHistories.length, elements, sourceForkInteraction],
  )
  const handle = useFullScreenHandle()

  return (
    <>
      <Card>
        <FullScreen handle={handle}>
          <div className="dndflow">
            <div
              className="reactflow-wrapper"
              style={{height: 1080}}
              ref={reactFlowWrapper}
            >
              <ReactFlow
                elements={
                  elementHistories[elementHistories.length - 1]?.elements || []
                }
                onConnect={onConnect}
                onElementsRemove={onElementsRemove}
                onLoad={onLoad}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onElementClick={onElementClick}
                onEdgeUpdate={onEdgeUpdate}
                nodeTypes={nodeTypes}
                connectionLineStyle={connectionLineStyle}
                style={{background: initBgColor}}
                // snapToGrid={true}
                // snapGrid={snapGrid}
              >
                <MiniMap />
                <Controls />
                <Background />
                <HandleButtonFlow
                  onRestore={onRestore}
                  // onNext={onNext}
                  // onSave={onSave}
                  onReset={onReset}
                  onSubmit={() => setModalCreate(true)}
                  isPrev={
                    automationInfo
                      ? elementHistories.length > 2
                      : elementHistories.length > 1
                  }
                  validations={validationEdges}
                  isEdit={isEdit}
                  isApproved={
                    automationInfo
                      ? automationInfo.status_info?.key === 'APPROVED'
                      : false
                  }
                  onDelete={handleDeleteAutomation}
                  popoverWarnningOpen={popoverWarnningOpen}
                  setPopoverWarnningOpen={setPopoverWarnningOpen}
                />
                <HandleButtonLayout
                  onLayout={onLayout}
                  automationType={automationType}
                  handle={handle}
                />
              </ReactFlow>
            </div>
          </div>
        </FullScreen>
      </Card>

      {/* ------------ modal setting------------------ */}

      <SettingDatasourceModal
        size={currentItem.size}
        modal={currentItem.id !== null}
        toggleModal={() => setCurrentItem({...currentItem, id: null})}
        title={currentItem.title}
        type={currentItem.type}
        setting={currentItem.id ? dataSubmit[currentItem.id]?.setting : {}}
        target={currentItem.id ? dataSubmit[currentItem.id]?.target : []}
        source={currentItem.id ? dataSubmit[currentItem.id]?.source : []}
        setSetting={updateDataSubmitSetting}
        id={currentItem.id}
        dataSource={dataSubmit?.data_source?.setting || {}}
        onDelete={id => handleConfirmDelete(elements.find(el => el.id === id))}
      />

      <SelectForkInteractionModal
        open={sourceForkInteraction !== null}
        toggle={() => setSourceForkInteraction(null)}
        setting={sourceForkInteraction?.setting || []}
        title={`Trạng thái ${
          sourceForkInteraction?.title?.toLowerCase() || 'tương tác rẽ nhánh'
        }`}
        name={sourceForkInteraction?.name || 'selectField'}
        setLabelForkInteraction={handleSetLabelForkInteraction}
      />

      <CreateAutojob
        isOpen={modalCreate}
        toggle={() => setModalCreate(false)}
        onSubmit={handleSubmitData}
        generalData={generalData}
      />
    </>
  )
}

export default RightContent
